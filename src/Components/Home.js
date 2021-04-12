import React, { Component } from "react";
import Projects from "./Projects";
import Navigation from "./Navigation";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Projects
          data={JSON.parse(document.getElementById("data").innerHTML)}
        />
      </div>
    );
  }
}
