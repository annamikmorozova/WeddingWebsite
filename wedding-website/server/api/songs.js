const router = require("express").Router();
const {Song} = require("../db/models");

app.post("/", (req, res) => 
    Song.create({
        name: req.body.name,
        artist: req.body.artist
    }).then( (result) => res.json(result) )
  );

module.exports = router;