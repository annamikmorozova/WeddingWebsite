import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import Registry from "./Registry";
import EA from "./EA";
import Navbar from "./Navbar";
import Song from "./Song";
import RSVP from "./RSVP.js";

export default class Routes extends Component {

	render() {
		return (
			<div>
				<Navbar />
				<Switch>
					<Route exact path="/" component={EA} />
					<Route exact path="/registry" component={Registry} />
					<Route exact path="/song-request" component={Song} />
					<Route exact path="/rsvp" component={RSVP} />
				</Switch>
			</div>
		);
	}
}