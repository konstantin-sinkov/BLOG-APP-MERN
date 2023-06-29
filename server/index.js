const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors);
app.use(express.json());

const {PORT} = require("./configs/config");
const {config} = require("dotenv");

app.post('/register', ((req, res) => {
    const {name, password} = req.body;
    console.log(name, password)
    // res.json({requestData: {name, password}});
    // console.log(req.body);
    console.log('111111');
}))

// app.get('/', ((req, res) => {
//     res.json('test, ok!');
// }))



app.listen(4000, () => {
    console.log('Server listens 4000');
});



