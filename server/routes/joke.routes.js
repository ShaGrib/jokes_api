const JokeController = require("../controllers/joke.controller");
const Joke = require("../models/joke.model");

module.exports = (app)=>{
    app.get("/api/jokes", JokeController.findAllJokes);

    app.post("/api/jokes/new", JokeController.createNewJoke);

    app.get("/api/jokes/random", JokeController.randomJoke);

    app.get("api/jokes/:_id", JokeController.findOneJoke);

    app.put("/api/jokes/update/:_id", JokeController.updateJoke);
    
    app.delete("/api/jokes/delete/:_id", JokeController.deleteJoke);
};