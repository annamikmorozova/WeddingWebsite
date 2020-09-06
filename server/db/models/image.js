const Sequelize = require("sequelize");
const db = require("../db");

const Image = db.define("image", {
	description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageName: {
		type: Sequelize.STRING
	},
});

module.exports = Image;