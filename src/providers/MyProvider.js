import React, { Component } from "react";
export const MyContext = React.createContext();

export default class MyProvider extends Component {
	state = {
		person: { name: "morgan" }
	};
	render() {
		return (
			<MyContext.Provider value={{ state: this.state }}>
				{this.props.children}
			</MyContext.Provider>
		);
	}
}
