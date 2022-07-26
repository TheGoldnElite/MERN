const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/redbelt", {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(() => console.log("i found the mongoose"))
    .catch(err => console.log("i lost the mongoose",err));