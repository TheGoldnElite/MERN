const JokeController = require("../controllers/joke.controller");

module.exports = app => {
    //create
    app.post("/api/jokes/new",JokeController.createJoke)

    //read one
    app.get("/api/jokes/:_id",JokeController.findOneJoke)

    //real all
    app.get("/api/jokes",JokeController.findAllJoke)

    //update
    app.put("/api/jokes/update/:_id",JokeController.updateJoke);

    //delete

    app.delete("/api/jokes/delete/_id",JokeController.deleteJoke);
}