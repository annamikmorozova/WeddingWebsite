const router = require("express").Router();
const multer = require("multer");
const {Image} = require("../db/models");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./uploads");
	},
	filename: (req, file, cb) => {
		cb(null, `${file.fieldname}_${+new Date()}.jpg`);
	}
});

const upload = multer({
	storage
});

router.post("/", upload.single("image"), async (req, res, next) => {
	try {
		const path = req.file.path.slice(8);
		const {description} = req.body;
		const entry = await Image.create({
			description,
			imageName: path
		});
		res.json(entry);
	} catch (error) {
		next(error);
	}
});