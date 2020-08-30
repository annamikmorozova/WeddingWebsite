import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import Registry from "./Registry";
import EA from "./EA";
import Navbar from "./Navbar";

export default class Routes extends Component {

	render() {
		return (
			<div>
				<Navbar />
				<Switch>
					<Route exact path="/" component={EA} />
					<Route exact path="/registry" component={Registry} />
				</Switch>
			</div>
		);
	}
}