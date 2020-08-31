"use strict";

const db = require("../server/db");
const {Song, RSVP} = require("../server/db/models");

async function seed() {
	try {
		await db.sync({
			force: true
		});
		console.log("db synced!");

		let rsvps = [...rsvps];

		await Promise.all(
			rsvps.map(rsvp => {
				return RSVP.create(rsvp);
			})
		);

		const songs = [...songs];

		await Promise.all(
			songs.map(song => {
				return Song.create(song);
			})
		);

		console.log(`seeded successfully`);
	} catch (error) {
		console.log(error);
	}
}

async function runSeed() {
	console.log("seeding...");
	try {
		await seed();
	} catch (err) {
		console.error(err);
		process.exitCode = 1;
	} finally {
		console.log("closing db connection");
		await db.close();
		console.log("db connection closed");
	}
}

if (module === require.main) {
	runSeed();
}

module.exports = seed;