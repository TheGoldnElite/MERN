//bring in the joke model

const Joke = require("../models/joke.model");

//basic crud commands

//create
module.exports.createJoke = (req,res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json({message: "something went wrong when creating a joke",
        error:err}))
}


//read one
module.exports.findOneJoke = (req,res) => {
    Joke.find({_id:req.params._id})
        .then(singleJoke => res.json(singleJoke))
        .catch(err => res.json({message:"something went wrong when finding one joke",
    error:err}))
}


//read all
module.exports.findAllJoke = (req,res) => {
    Joke.find()
        .then(allJokes => res.json(allJokes))
        .catch(err => res.json({message:"something went wrong when finding all jokes",
    error:err}))
}


//update
module.exports.updateJoke = (req,res) => {
    Joke.findOneAndUpdate({_id:req.params._id},req.body,{new:true})
        .then(updateJoke => res.json(updateJoke))
        .catch(err => res.json({message:"something went wrong when updating one joke",
    error:err}))
}



//delete
module.exports.deleteJoke = (req,res) => {
    Joke.deleteOne({_id:req.params._id})
        .then(deleteJoke => res.json(deleteJoke))
        .catch(err => res.json({message:"something went wrong when deleting one joke",
    error:err}))
}