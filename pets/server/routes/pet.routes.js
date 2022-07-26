const PetController = require("../controllers/pet.controller");

module.exports = app => {
    //create
    app.post("/api/pets/create", PetController.createPet);

    //real all
    app.get("/api/pets", PetController.findAllPets);

    //read one
    app.get("/api/pets/:_id", PetController.findOnePet);

    //update
    app.put("/api/pets/update/:_id", PetController.updatePet);

    //delete

    app.delete("/api/pets/delete/:_id", PetController.deletePet);
}