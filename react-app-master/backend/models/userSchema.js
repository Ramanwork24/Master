const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim:true,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Not valid Email")
            }
        },
        required: true,
    },
    password:{
        type: String,
        unique: true,
        required: true,
    }
});

//CREATING MODEL
const users = new mongoose.model("users",userSchema);

module.exports = users;