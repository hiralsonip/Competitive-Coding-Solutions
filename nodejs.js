const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Game = require("./models/Game");

const app = express();
const PORT = 3000;

// middleware
app.use(cors());
app.use(bodyParser.json());

// In memory data store
let games = [];

// Get all games
app.get("/games", (req, res) => {
    res.json(games)
});

// add new games
app.post("/games", (req, res) => {
    const { name, genre } = req.body;
    if (!name || !genre) {
        return res.status(400).json({ error: "Fields are required" })
    }
    const newGame = new Game(name, genre);
    games.push(newGame)
    res.status(201).json(newGame)
})

// delete game 
app.delete("/games/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = games.findIndex((game) => game.id === id);
    if (index === -1) {
        return res.status(404).json({ error: "Game not found" });
    }
    const removed = games.splice(index, 1)[0];
    res.json(removed)

});

// start the server 
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})