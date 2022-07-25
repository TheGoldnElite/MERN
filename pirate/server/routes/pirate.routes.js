const PirateController = require("../controllers/pirate.controller");

module.exports = app => {
    //create
    app.post("/api/pirates/create", PirateController.createPirate);

    //real all
    app.get("/api/pirates", PirateController.findAllPirates);

    //read one
    app.get("/api/pirates/:_id", PirateController.findOnePirate);

    //update
    app.put("/api/pirates/update/:_id", PirateController.updatePirate);

    //delete

    app.delete("/api/pirates/delete/:id", PirateController.deletePirate);
}