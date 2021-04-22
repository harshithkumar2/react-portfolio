import React, { Component } from "react";
// import Navigation from "./Components/Navigation";

const Navigation = React.lazy(() => import("./Components/Navigation"));
export default class App extends Component {
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
          <Navigation />
        </Suspense>
      </div>
    );
  }
}
