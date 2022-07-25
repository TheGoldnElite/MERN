const Pirate = require("../models/pirate.model");


//create
module.exports.createPirate = (req,res) => {
    Pirate.create(req.body)
        .then(newPirate => res.json(newPirate) )
        .catch(err => res.json({message:"Error making a pirate",error:err}))
}


//real all

module.exports.findAllPirates = (req,res) => {
    Pirate.find()
        .then(allPirates => res.json(allPirates) )
        .catch(err => res.json({message:"Error finding all pirates",error:err}))
}

// read one

module.exports.findOnePirate = (req,res) => {
    Pirate.find({_id:req.params._id})
        .then(onePirate => res.json(onePirate) )
        .catch(err => res.json({message:"Error finding one pirate",error:err}))
}

//update

module.exports.updatePirate = (req,res) => {
    Pirate.findOneAndUpdate({_id:req.params._id},req.body,{new:true})
        .then(onePirate => res.json(onePirate) )
        .catch(err => res.json({message:"Error updating one pirate",error:err}))
}

//delete

module.exports.deletePirate = (req,res) => {
    Pirate.deleteOne({_id:req.params._id})
        .then(res.json({message:"Pirate was removed"}) )
        .catch(err => res.json({message:"Error deleting one pirate",error:err}))
}