// we need mongoose
const mongoose = require('mongoose');

//we need to connect to our database
mongoose.connect("mongodb://127.0.0.1/JokeSchema", {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(() => console.log("I found the mongoose"))
    .catch(err => console.log("no mongoose", err))