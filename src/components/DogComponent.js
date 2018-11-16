import React, { Component } from "react";
import { MyContext } from "../providers/MyProvider";
import "./DogComponent.scss";

export default class DogComponent extends Component {
	async componentDidMount() {}

	render() {
		console.log(this.context, "line 5");
		if (this.context.dogToAdopt === null) {
			return (
				<div className="Dogs">
					<h1>Dog</h1>
					<img
						alt="Dog"
						src="http://www.awesomelycute.com/gallery/2015/04/smiling-dogs-posted-at-awesomelycute.com-04012015-8.jpg"
					/>
					<ul className="dlContainer">
						<li>Name: Taken</li>
						<li>Gender: </li>
						<li>Age: </li>
						<li>Breed: </li>
						<li>Their Story: </li>
					</ul>
					<button onClick={this.context.db.adoptDog} className="AdoptButton">
						Adopt
					</button>
				</div>
			);
		}
		return (
			<div className="Dogs">
				<h1>Dog</h1>
				<img
					alt="Dog"
					src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?cs=srgb&dl=animal-animal-photography-cat-104827.jpg&fm=jpg"
				/>
				<ul className="dlContainer">
					<li>Name: {this.context.dogToAdopt.name}</li>
					<li>Gender: {this.context.dogToAdopt.sex}</li>
					<li>Age: {this.context.dogToAdopt.age}</li>
					<li>Breed: {this.context.dogToAdopt.breed} </li>
					<li>Their Story: {this.context.dogToAdopt.story}</li>
				</ul>
				<button onClick={this.context.db.adoptDog} className="AdoptButton">
					Adopt
				</button>
			</div>
		);
	}
}

DogComponent.contextType = MyContext;
