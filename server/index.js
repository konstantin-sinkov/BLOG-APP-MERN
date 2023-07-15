const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const {PORT, DB_PASSWORD, DB_USER, JWT_SALT} = require("./configs/config");
const User = require("./models/User")

const app = express();
const salt = bcrypt.genSaltSync(10);
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


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
})

app.post('/login', async (req, res) => {
    const {userName, userPassword} = req.body;
    console.log(req.body);
    const loginUser = await User.findOne({username: userName});
    
    // res.json(loginUser);
    const isPassOk = bcrypt.compareSync(userPassword, loginUser.password);
    // res.json(isPassOk);
    if (isPassOk) {
        // logged in
        try {
            const token = await jwt.sign({userName, id: loginUser._id}, JWT_SALT);
            // res.json(token);
            res.cookie('token', token).json('ok');
        } catch (err) {
            console.log(err.message);
        }
        // jwt.sign({userName, id: loginUser._id}, JWT_SALT, {}, (err, token) => {
        //     if (err) throw err;
        //     res.json(token);
        // });
    } else {
        res.status(400).json('wrong credentials!');
    }
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





