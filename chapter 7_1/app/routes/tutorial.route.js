module.exports = (app) => {
    const tutorials = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tutorials.create);
  
    // Retrieve all Tutorial
    router.get("/", tutorials.findAll);
  
    // Retrieve all published Tutorial
    router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);
  
    // Update a Tutorial with id
    router.post("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);
  
    // Delete all Tutorial
    router.delete("/", tutorials.deleteAll);
  
    app.use("/api/tutorials", router);
  };