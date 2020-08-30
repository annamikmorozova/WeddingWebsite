const Sequelize = require("sequelize");
const db = require("../db");

const RSVP = db.define("rsvp", {
	firstName: {
        type: Sequelize.STRING,
        allowNull: false
	},
	lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    plusOneFirstName: {
        type: Sequelize.STRING
    },
    plusOneLastName: {
        type: Sequelize.STRING
    },
    attendance: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});

module.exports = RSVP;

