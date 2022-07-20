// we need mongoose
const mongoose = require('mongoose');

//we need to connect to our database
mongoose.connect("mongodb://localhost/jokes_schema", {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(() => console.log("I found the mongoose"))
    .catch(err => console.log("no mongoose", err))