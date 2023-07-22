//import modules
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const {PORT, DB_PASSWORD, DB_USER, JWT_SALT} = require("./configs/config");
const User = require("./models/User");

//app
const app = express();

//middleware
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


const salt = bcrypt.genSaltSync(10);
//routes
app.post('/register', async (req, res) => {
    const {userName, userPassword} = req.body;
    
    try {
        const newUser = await User.create({
            username: userName,
            password: bcrypt.hashSync(userPassword, salt)
        })
        res.json(newUser);
    } catch(e) {
        res.status(400).json(e);
    }
    
    console.log('111111');
    console.log(req.body);
    console.log('111111');
});

app.post('/login', async (req, res) => {
    const {userName, userPassword} = req.body;
    
    //check is username exist
    const loginUser = await User.findOne({username: userName});
    
    //check is input pass identical to hashed pass in db
    const isPassOk = bcrypt.compareSync(userPassword, loginUser.password);
    if (isPassOk) {
        // logged in
        try {
            //generating token with user_info (login and id from db)
            const token = await jwt.sign({userName, id: loginUser._id}, JWT_SALT);
            // res.json(token);
            //send cookie in the response
            res.cookie('token', token).json({
                id: loginUser._id,
                username: userName
            });
        } catch (err) {
            console.log(err.message);
        }
    } else {
        res.status(400).json('wrong credentials!');
    }
});

    //waypoint for profile (checking is token in cookie present and valid)
app.get('/profile', (req, res) => {
    // res.json(req.cookies);
    const {token} = req.cookies;
    
    jwt.verify(token, JWT_SALT, {}, (err, info) => {
        if (err) throw err;
        // console.log(info);
        res.json(info);
    })
});

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok');
})

app.get("/", async (req, res) => {
    const users = await User.find({});
    res.json(users);
});

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.e9bxlbo.mongodb.net/?retryWrites=true&w=majority`);
        app.listen(PORT, () => {
            console.log('Server listens ' + PORT);
        });
    } catch (e) {
        console.log(e.message);
    }
};

start();
