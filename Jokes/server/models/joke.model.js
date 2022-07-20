//bring in mongoose so we can properly create a schema
const mongoose = require('mongoose');

//we make our model
const JokeSchema = new mongoose.Schema({
    //id,setup,punchine,created at
    setup: String,
    punchline: String
});

//finalize setting up the model
const Joke = mongoose.model("Joke",JokeSchema);

//we need to export the table to other areas of my project
module.exports = Joke;