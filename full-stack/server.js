const express = require("express");
const app = express();
const port = 8000;

//Add in our connection to the config file

require("./server/config/mongoose.config");


app.use(express.json(),express.urlencoded({extended:true}));


//add in our connection to our routes
//make sure this below the code for post requests
require("./server/routes/game.routes")(app);


app.listen(port,()=> console.log(`Running on port ${port}!`));