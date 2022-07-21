//bring in mongoose so we can properly create a schema
const mongoose = require('mongoose');

//we make our model
const JokeSchema = new mongoose.Schema({
    //id,setup,punchine,created at
    setup: {
        type:String,
        minLength:[10,"Setup needs to be at least 10 characters long"]
    },
    punchline: {
        type:String,
        minLength:[3,"Punchline needs to be at least 3 characters long"]
    }
});

//finalize setting up the model
const Joke = mongoose.model("Joke",JokeSchema);

//we need to export the table to other areas of my project
module.exports = Joke;