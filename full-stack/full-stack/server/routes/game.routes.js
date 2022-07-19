const GameController = require("../controllers/game.controller");

module.exports = app => {
    //create
    app.post("/api/games/create",GameController.createGame);

    //read all
    app.get("/api/games",GameController.findAllGames);

    //read one
    app.get("/api/games/:id",GameController.findAllGames);
}