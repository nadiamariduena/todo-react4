import React from "react";
// YOu can do either this or that, this two lines go together
// import React, { Component } from "react";
// export default class App extends Component {
//
import List from "./components/List";
import Data from "./data.json";
//
//the following is the afternoon lesson that will be related to the assignment tomorrow
//DATABASE
const fileData = Data.map((obj) => {
  const { id, name, address } = obj;
  //
  return (
    <h4 key={id}>
      Hey i am {name}, and I live in {address}
    </h4>
  );
});
//
//this is another way to pass styles, check this line because its connected to it :   <h1 className="header" style={{ headerStyle }}>
const headerStyle = {
  backgroundColor: "transparent",
  color: "green",
};
//
export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="wrapper-section">
          <h1 className="header" style={headerStyle}>
            HELLO
          </h1>
          {/* 
        -data base is different, here you set it up like this :  {fileData}   
        
        -this class here: export default class App extends React.Component {
            is why i have to use className in the h1, so careful not to confuse them
        
        
        */}

          <h2 style={{ backgroundColor: "#fff", color: "#006CFF" }}>
            {" "}
            My Todo{" "}
          </h2>

          {fileData}
          <List />
        </div>
      </React.Fragment>
    );
  }
}
