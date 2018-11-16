import React, { Component } from "react";

import "./App.scss";
import MyProvider from "./providers/MyProvider";
import { MyContext } from "./providers/MyProvider";
import Dashboard from "./components/Dashboard";

class App extends Component {
	render() {
		console.log(this.context);
		return (
			<MyProvider>
				<div className="App">
					<Dashboard />
				</div>
			</MyProvider>
		);
	}
}

App.contextType = MyContext;
export default App;
