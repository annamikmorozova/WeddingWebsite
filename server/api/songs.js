const router = require("express").Router();
const {Song} = require("../db/models");

router.post("/", (req, res) => {
  Song.create({
      name: req.body.name,
      artist: req.body.artist
  }).then( (result) => res.json(result) )
});

module.exports = router;