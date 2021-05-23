import React, { Component, Suspense } from "react";
// import Projects from "./Projects";
// import Navigation from "./Navigation";
// import LinearProgress from "@material-ui/core/LinearProgress";
import "./spinner.css";
import Row from "react-bootstrap/Row";
import Container from "@material-ui/core/Container";

const Projects = React.lazy(() => import("./Projects"));
const Navigation = React.lazy(() => import("./Navigation"));

export default class Home extends Component {
  render() {
    const data = JSON.parse(document.getElementById("data").innerHTML);
    var i = 0;
    return (
      <div>
        <Suspense
          fallback={
            <div className="container">
              <div className="circle circle-red"></div>
              <div className="circle circle-blue"></div>
              <div className="circle circle-green"></div>
            </div>
          }
        >
          <section>
            <Navigation />
            <Container>
              <Row>
                {data.projects.map((pro) => {
                  return <Projects data={pro} key={pro.name} id={`${i++}`} />;
                })}
              </Row>
            </Container>
          </section>
        </Suspense>
      </div>
    );
  }
}
