const express = require("express");
const app= express();
const cors =require("cors");
const port = 8000;

app.use(cors());

//add in our connection to the config file
require("./server/config/mongoose.config");

app.use(express.json(),express.urlencoded({extended:true}));

//add in our connection to our routes
//below the code for post requests

require("./server/routes/pirate.routes")(app);
app.listen(port,() => console.log(`Running on port ${port}`));