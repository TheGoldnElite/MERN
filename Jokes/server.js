const express = require('express');
const app = express();
const port = 8000;

//Be sure to add this line after making mongoose.config
require("./server/config/mongoose.config");

//Dont forget this line for working with post data
app.use(express.json(),express.urlencoded({extended:true}));

//make sure this line comes AFTER the parsing line
const AllMyRoutes = require("./server/routes/Joke.routes");
AllMyRoutes(app);

app.listen(port,()=>console.log(`running on ${port}`));