import React, { Component } from "react";
import { MyContext } from "../providers/MyProvider";
import "./CatComponent.scss";

export default class CatComponent extends Component {
	render() {
		console.log(this.context, "line 5");
		if (this.context.catToAdopt === null) {
			return (
				<div className="Cats">
					<h1>Cats</h1>
					<img
						alt="Cats"
						src="http://arizonapetvet.com/blog/wp-content/uploads/2016/09/Happy-cat-1024x711.jpg"
					/>
					<ul className="dlContainer">
						<li>Name: Taken </li>
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
			<div className="Cats">
				<h1>Cats</h1>
				<img alt="Cat" src={this.context.catToAdopt.imageURL} />
				<ul className="dlContainer">
					<li>Name: {this.context.catToAdopt.name}</li>
					<li>Gender: {this.context.catToAdopt.sex}</li>
					<li>Age: {this.context.catToAdopt.age}</li>
					<li>Breed: {this.context.catToAdopt.breed} </li>
					<li>Their Story: {this.context.catToAdopt.story}</li>
				</ul>
				<button onClick={this.context.db.adoptCat} className="AdoptButton">
					Adopt
				</button>
			</div>
		);
	}
}

CatComponent.contextType = MyContext;
