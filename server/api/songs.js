const router = require("express").Router();
const {Song} = require("../db/models");

router.post("/", (req, res) => {
  Song.create({
      name: req.body.name,
      artist: req.body.artist
  }).then( (result) => res.json(result))
});

router.get("/", async (req, res, next) => {
	try {
		const songs = await Song.findAll();
		res.json(songs);
	} catch (error) {
		next(error);
	}
});

module.exports = router;