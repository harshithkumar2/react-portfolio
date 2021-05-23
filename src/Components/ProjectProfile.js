import { Container } from "@material-ui/core";
import React, { Component, Suspense } from "react";
// import Navigation from "../Components/Navigation";
// import Profile from "../Components/Profile";

const Navigation = React.lazy(() => import("../Components/Navigation"));
const Profile = React.lazy(() => import("../Components/Profile"));

export default class ProjectProfile extends Component {
  render() {
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
              <Profile
                data={JSON.parse(document.getElementById("data").innerHTML)}
              />
            </Container>
          </section>
        </Suspense>
      </div>
    );
  }
}
