const path = require("path");
const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const session = require("express-session");
const passport = require("passport");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const db = require("./db");
const bodyParser = require('body-parser');
const cors = require('cors');

const sessionStore = new SequelizeStore({
	db
});
const PORT = process.env.PORT || 8081;
const app = express();
module.exports = app;

if (process.env.NODE_ENV !== "production") require("../secrets");

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
	try {
		const user = await db.models.user.findByPk(id);
		done(null, user);
	} catch (err) {
		done(err);
	}
});

const createApp = () => {
	app.use(morgan("dev"));
	app.use(cors());

	app.use(compression());
	app.use(bodyParser.json());
	app.use(
		bodyParser.urlencoded({
			extended: false
		})
	);

	app.use(
		session({
			secret: process.env.SESSION_SECRET || "I love you",
			store: sessionStore,
			resave: false,
			saveUninitialized: false
		})
	);
	app.use(passport.initialize());
	app.use(passport.session());


	app.use(express.static(path.join(__dirname, "..", 'build')));
	app.use(express.static(path.join(__dirname, "..", "public")));
	app.use(express.static(path.join(__dirname, "..", "uploads")));

	app.use((req, res, next) => {
		if (path.extname(req.path).length) {
			const err = new Error("Not found");
			err.status = 404;
			next(err);
		} else {
			next();
		}
	});

	app.use("/api", require("./api"));

	app.use("*", (req, res) => {
		res.sendFile(path.join(__dirname, "..", "build/index.html"));
	});

	app.use((err, req, res, next) => {
		console.error(err);
		console.error(err.stack);
		res.status(err.status || 500).send(err.message || "Internal server error.");
	});
};

const startListening = () => {
	app.listen(PORT, () => console.log(`Connected to ${PORT}`));
};

const syncDb = () => db.sync();

async function bootApp() {
	await sessionStore.sync();
	await syncDb();
	await createApp();
	await startListening();
}

if (require.main === module) {
	bootApp();
} else {
	createApp();
}