const Pet = require("../models/pet.model");

//create
module.exports.createPet = (req,res) => {
    Pet.create(req.body)
        .then(newPet => res.json(newPet))
        .catch(err =>res.json({message:"Error making a pet",error:err}))
}
//read all
module.exports.findAllPets = (req,res) => {
    Pet.find()
        .then(allPets => res.json(allPets) )
        .catch(err => res.json({message:"Error finding all pets",error:err}))
}
//read one
module.exports.findOnePet = (req,res) => {
    Pet.find({_id:req.params._id})
        .then(onePet => res.json(onePet) )
        .catch(err => res.json({message:"Error finding one pet",error:err}))
}
//update
module.exports.updatePet = (req,res) => {
    Pet.findOneAndUpdate({_id:req.params._id},req.body,{new:true,runValidators:true})
        .then(onePet => res.json(onePet) )
        .catch(err => res.json({message:"Error updating one pet",error:err}))
}
//delete

module.exports.deletePet = (req,res) => {
    Pet.deleteOne({_id:req.params._id})
        .then(res.json({message:"Pet was removed"}) )
        .catch(err => res.json({message:"Error deleting one pet",error:err}))
}