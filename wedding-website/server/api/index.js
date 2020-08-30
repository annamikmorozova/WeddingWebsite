const router = require("express").Router();

router.use("/songs", require("./songs"));
router.use("/rsvps", require("./rsvps"));

router.use((req, res, next) => {
	const error = new Error("Not Found");
	error.status = 404;
	next(error);
});

module.exports = router;