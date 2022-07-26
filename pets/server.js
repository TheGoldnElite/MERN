const express = require('express');
const app = express();
const port = 8000;
const cors = require("cors");

app.use(cors());

//add connection to the database here
require("./server/config/mongoose.config");
app.use(express.json(), express.urlencoded({extended:true}));

//add connection to our routes here
require("./server/routes/pet.routes")(app);
app.listen(port, ()=> console.log(`Running on port ${port}`));