const Game = require("../models/game.model");

//Create
module.exports.createGame = (req.res) => {
    Game.create(req.body)
        .then(newGame => res.json(newGame))
        .catch(err => res.json({message:"error making a game",error:err}))
}
//Read all
module.exports.findAllGames = (req.res) => {
    Game.find()
        .then(allGames => res.json(allGames))
        .catch(err => res.json({message:"error grabbing all games",error:err}))
}
//read one
module.exports.findOneGame = (req.res) => {
    Game.find(_id:req.params._id)
        .then(oneGame => res.json(oneGame))
        .catch(err => res.json({message:"error finding one game",error:err}))

//update

module.exports.updateGame = (req.res) => {
    Game.findOneAndUpdate(_id:req.params._id)
        .then(oneGame => res.json(oneGame))
        .catch(err => res.json({message:"error finding one game",error:err}))
