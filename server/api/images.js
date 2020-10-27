const router = require("express").Router();
const multer = require("multer");
const {Image} = require("../db/models");
const cloudinary = require("cloudinary").v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
	cloudinary: cloudinary,
	params: {
		folder: () => "wedding-website"
	}
})

const upload = multer({
	storage
});

router.post("/", upload.single("image"), async (req, res, next) => {
	try {
		const {description} = req.body;
		const entry = await Image.create({
			description,
			imageName: req.file.path
		});
		res.json(entry);
	} catch (error) {
		next(error);
	}
});

router.get("/", async (req, res, next) => {
	try {
		const images = await Image.findAll();
		res.json(images);
	} catch (error) {
		next(error);
	}
});

module.exports = router;