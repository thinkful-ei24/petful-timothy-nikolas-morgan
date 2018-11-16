import React, { Component } from "react";
import CatComponent from "./CatComponent";
import DogComponent from "./DogComponent";
import { MyContext } from "../providers/MyProvider";

export default class Dashboard extends Component {
	componentDidMount() {
		//fetches to both dog and cat
		//data goes to context cat and dog
	}

	render() {
		console.log(this.context);
		return (
			<div className="GreaterContainer">
				<CatComponent />
				<DogComponent />
			</div>
		);
	}
}

Dashboard.contextType = MyContext;
