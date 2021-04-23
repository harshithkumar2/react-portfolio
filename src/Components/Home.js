import React, { Component, Suspense } from "react";
// import Projects from "./Projects";
// import Navigation from "./Navigation";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Spin } from "antd";
import "../App.css";

const Projects = React.lazy(() => import("./Projects"));
const Navigation = React.lazy(() => import("./Navigation"));

export default class Home extends Component {
  render() {
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
            <Projects
              data={JSON.parse(document.getElementById("data").innerHTML)}
            />
          </section>
        </Suspense>
      </div>
    );
  }
}
