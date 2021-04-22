import React, { Component, Suspense } from "react";
// import Projects from "./Projects";
// import Navigation from "./Navigation";
import LinearProgress from "@material-ui/core/LinearProgress";

const Projects = React.lazy(() => import("./Projects"));
const Navigation = React.lazy(() => import("./Navigation"));

export default class Home extends Component {
  render() {
    return (
      <div>
        <Suspense
          fallback={
            <div
              style={{
                width: "90%",
                transform: "translate(28px,350px)",
              }}
            >
              <LinearProgress />
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
