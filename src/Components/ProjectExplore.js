import React from "react";
import Navigation from "./Navigation";
import Mobilecar from "./Mobilecar";
import Tables from "./Tables";

function ProjectExplore(props) {
  const id = props.match.params.id;

  return (
    <div>
      <Navigation />
      <Mobilecar
        data={JSON.parse(document.getElementById("data").innerHTML)}
        id={id}
      />
      <Tables
        data={JSON.parse(document.getElementById("data").innerHTML)}
        id={id}
      />
    </div>
  );
}

export default ProjectExplore;
