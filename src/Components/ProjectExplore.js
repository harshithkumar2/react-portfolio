import React, { Suspense } from "react";
// import Navigation from "./Navigation";
// import Mobilecar from "./Mobilecar";
// import Tables from "./Tables";
// import LinearProgress from "@material-ui/core/LinearProgress";
import { Spin } from "antd";
import "../App.css";

const Navigation = React.lazy(() => import("./Navigation"));
const Mobilecar = React.lazy(() => import("./Mobilecar"));
const Tables = React.lazy(() => import("./Tables"));

function ProjectExplore(props) {
  const id = props.match.params.id;

  return (
    <div>
      <Suspense
        fallback={
          <div className="spinner">
            <Spin size="large" tip="Loading..." />
          </div>
        }
      >
        <section>
          <Navigation />
          <Mobilecar
            data={JSON.parse(document.getElementById("data").innerHTML)}
            id={id}
          />
          <Tables
            data={JSON.parse(document.getElementById("data").innerHTML)}
            id={id}
          />
        </section>
      </Suspense>
    </div>
  );
}

export default ProjectExplore;
