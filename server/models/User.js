const mongoose = require('mongoose');
const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
    username: {type: String, required: true, min: 6, unique: true},
    password: {type: String, required: true, min: 6, unique: true}
});

const userModel = model('User', UserSchema);

module.exports = userModel;
