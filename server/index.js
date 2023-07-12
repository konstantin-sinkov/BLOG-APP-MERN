const express = require("express");
const cors = require('cors');
require('dotenv').config();

const {PORT} = require("./configs/config");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.post('/register', ((req, res) => {
    const {userName, userPassword} = req.body;
    res.json({requestData: {userName, userPassword}});

    console.log('111111');
    console.log(req.body);
    console.log('111111');
}))

app.get("/", (req, res) => {
    res.send('port ' + PORT);
})

app.listen(PORT, () => {
    console.log('Server listens ' + PORT);
});






