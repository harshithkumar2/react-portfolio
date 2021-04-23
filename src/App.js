import React, { Component } from "react";
// import Navigation from "./Components/Navigation";
import { Spin } from "antd";
import "../App.css";

const Navigation = React.lazy(() => import("./Components/Navigation"));
export default class App extends Component {
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
          <Navigation />
        </Suspense>
      </div>
    );
  }
}
