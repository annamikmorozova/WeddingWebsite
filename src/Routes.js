import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import Registry from "./Registry";
import EA from "./EA";
import Navbar from "./Navbar";
import Song from "./Song";
import RSVP from "./RSVP.js";
import Venue from "./Venue.js";
import PictureForm from "./PictureForm";
import AnotherSong from "./AnotherSong";
import AnotherPicture from "./AnotherPicture";
import DisplayImages from "./DisplayImages";
import WeddingParty from "./WeddingParty";

export default class Routes extends Component {

	render() {
		return (
			<div>
				<Navbar />
				<Switch>
					<Route exact path="/home" component={EA} />
					<Route exact path="/registry" component={Registry} />
					<Route exact path="/song-request" component={Song} />
					<Route exact path="/rsvp" component={RSVP} />
					<Route exact path="/venue" component={Venue} />
					<Route exact path="/submit-a-picture" component={PictureForm} />
					<Route exact path="/another-song" component={AnotherSong} />
					<Route exact path="/another-picture" component={AnotherPicture} />
					<Route exact path="/wedding-party" component={WeddingParty} />
					<Route exact path="/all-images" component={DisplayImages} />
				</Switch>
					<Route exact path="/" component={EA} />
			</div>
		);
	}
}