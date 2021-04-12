import React, { Component } from "react";
import Navigation from "../Components/Navigation";
import Profile from "../Components/Profile";

export default class ProjectProfile extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Profile data={JSON.parse(document.getElementById("data").innerHTML)} />
      </div>
    );
  }
}
