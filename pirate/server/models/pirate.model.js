const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"pirate must have a name"]
    },

    image:{
        type:String,
        required:[true,"Pirate must have an image"]
    },

    chest:{
        type:Number,
        required:[true,"you are not a pirate if you dont have tresure chests"],
        min:[1,"You are a better pirate then that"]
    },
    
    phrase:{
        type:String,
        required:[true,"What is your catch phrase?"]
    },

    position:{
        type:String,
        required:[true,"What is your crew position?"]
    },


},{timestamps:true})

const Pirate= mongoose.model("Pirate",PirateSchema);

module.exports = Pirate;