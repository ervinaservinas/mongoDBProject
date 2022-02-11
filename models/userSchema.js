/*
const mongoose = require("mongoose")
const {mongo} = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    money: {
        type: Number,
        required:true
    }

})


module.exports = mongoose.model("userModel", userSchema)
*/


const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: false
    },
    money: {
        type: Number,
        required: true,
        default: 2000
    },
})

module.exports = mongoose.model("fakeAppUsers", userSchema)