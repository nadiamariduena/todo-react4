import React from "react";
// YOu can do either this or that, this two lines go together
// import React, { Component } from "react";
// export default class App extends Component {
//
import List from "./components/List";
//
export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>HELLO</h1>
        <List />
      </React.Fragment>
    );
  }
}
