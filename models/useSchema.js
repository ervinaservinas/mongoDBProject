const mongoose = require("mongoose")
const {mongo} = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    title: {
        type:String,
        required:true
    },
    age:{
        type: Number,
        required:true
    }

})


module.exports = mongoose.model("userModel", userSchema)
