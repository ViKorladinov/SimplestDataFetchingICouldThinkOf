import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    fetch("https://private-a964dd-apirapi.apiary-mock.com/questions")
      .then(data => data.json())
      .then(data => this.loadFriends(data[0].friends))
      .catch(e => console.log(e));
  }
  loadFriends(data) {
    let counter = 0;
    let students = data.map(e => <p key={counter++}>{e.friend}</p>);
    this.setState({ frns: students });
  }
  state = {
    frns: []
  };
  render() {
    return (
      <div className="App">
        <h1>These are my friends:</h1>
        {this.state.frns}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
