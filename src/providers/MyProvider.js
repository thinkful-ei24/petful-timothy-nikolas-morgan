import React, { Component } from "react";
// import db from "./db";
export const MyContext = React.createContext();

/**
 * Context Usage:
 * @param {Object | null} dogToAdopt - null if no dogs left
 * @param {Object | null} catToAdopt - null if no cats left
 * @param {Boolean} loading
 * @interface db - a way to interact with database access
 * 		@method db.adoptCat - Call this when someone clicks adopt for cat
 * 		@method db.adoptDog - Call this when someone clicks adopt for dog
 */
export default class MyProvider extends Component {
	state = {
		dogToAdopt: {
			// PLACEHOLDER DATA
			imageURL:
				"http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg",
			imageDescription:
				"A smiling golden-brown golden retreiver listening to music.",
			name: "Zeus",
			sex: "Male",
			age: 3,
			breed: "Golden Retriever",
			story: "Owner Passed away"
		},
		catToAdopt: {
			// PLACEHOLDER DATA
			imageURL:
				"https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg",
			imageDescription:
				"Orange bengal cat with black stripes lounging on concrete.",
			name: "Fluffy",
			sex: "Female",
			age: 2,
			breed: "Bengal",
			story: "Thrown on the street"
		},
		loading: false, // PLACEHOLDER DATA => default is true until DB call returns
		db: {
			adoptCat: this.adoptCat,
			adoptDog: this.adoptDog
		}
	};

	componentDidMount() {
		// UNCOMMENT WHEN DB WIRED UP
		// db.initialize().then(res =>
		//   this.setState({
		//     dogToAdopt: res.dogToAdopt,
		//     catToAdopt: res.catToAdopt,
		//     loading: false
		//   })
		// );
	}

	adoptCat() {
		console.log("Adopting cat!");
	}

	adoptDog() {
		console.log("Adopting dog!");
	}

	render() {
		return (
			<MyContext.Provider value={this.state}>
				{this.props.children}
			</MyContext.Provider>
		);
	}
}
