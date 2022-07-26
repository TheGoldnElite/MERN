const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Pet has to have a name"]
        
    },
    type:{
        type:String,
        required:[true,"What is the pets type?"]
        
    },
    description:{
        type:String,
        required:[true,"Pet has to have a description"]
        
    },
    skillone:{
        type:String,
    },
    skilltwo:{
        type:String,
    },
    skillthree:{
        type:String,
    },
},{timestamps:true})

const Pet = mongoose.model("Pet",PetSchema)

module.exports = Pet;