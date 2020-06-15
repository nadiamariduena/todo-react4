import React from "react";
import reactDOM from "react-dom";
import "./scss/main.scss";
import App from "./App";

reactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// // if i want to use images, there are two things i should care
//  there are images i need for production in the src folder and the images to public
// images for content of the page will go inside the src /scss etc
// images like favicon will go in public
