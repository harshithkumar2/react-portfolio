import React, { Component } from "react";
// import Navigation from "./Components/Navigation";

const Navigation = React.lazy(() => import("./Components/Navigation"));
export default class App extends Component {
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
          <Navigation />
        </Suspense>
      </div>
    );
  }
}
