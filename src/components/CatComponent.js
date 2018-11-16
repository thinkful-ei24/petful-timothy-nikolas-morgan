import React, { Component } from "react";
import { MyContext } from "../providers/MyProvider";
import "./CatComponent.scss";

export default class CatComponent extends Component {
	render() {
		console.log(this.context, "line 5");
		return (
			<div className="Cats">
				<h1>Animal Name</h1>
				<img
					alt="Cat"
					src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg"
				/>
				<dl className="dlContainer">
					<dt>Coffee</dt>
					<dd>Black hot drink</dd>
					<dt>Milk</dt>
					<dd>White cold drink</dd>
				</dl>
				<button className="AdoptButton">Adopt</button>
			</div>
		);
	}
}

CatComponent.contextType = MyContext;