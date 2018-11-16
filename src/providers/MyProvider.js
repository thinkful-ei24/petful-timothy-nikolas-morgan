import React, { Component } from "react";
import db from "./db";
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
    dogToAdopt: null,
    catToAdopt: null,
    loading: true,
    db: {
      adoptCat: this.adoptCat.bind(this),
      adoptDog: this.adoptDog.bind(this)
    }
  };

  componentDidMount() {
    db.initialize().then(pets =>
      this.setState({
        ...pets,
        loading: false
      })
    );
  }

  adoptCat() {
    console.log("adopting cat!");
    db.adoptCat()
      .then(cat => this.setState({ catToAdopt: cat }))
      .catch(() => this.setState({ catToAdopt: null }));
  }

  adoptDog() {
    console.log("adopting dog!");
    db.adoptDog()
      .then(dog => this.setState({ dogToAdopt: dog }))
      .catch(() => this.setState({ dogToAdopt: null }));
  }

  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
