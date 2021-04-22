import React, { Component, Suspense } from "react";
// import Navigation from "../Components/Navigation";
// import Profile from "../Components/Profile";
import LinearProgress from "@material-ui/core/LinearProgress";

const Navigation = React.lazy(() => import("../Components/Navigation"));
const Profile = React.lazy(() => import("../Components/Profile"));

export default class ProjectProfile extends Component {
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
            <Profile
              data={JSON.parse(document.getElementById("data").innerHTML)}
            />
          </section>
        </Suspense>
      </div>
    );
  }
}
