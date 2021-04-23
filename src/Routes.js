import React, { Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
// import Home from "./Components/Home";
// import ProjectExplore from "./Components/ProjectExplore";
// import ProjectProfile from "./Components/ProjectProfile";
// import LinearProgress from "@material-ui/core/LinearProgress";
import { Spin } from "antd";
import "./App.css";

const Home = React.lazy(() => import("./Components/Home"));
const ProjectExplore = React.lazy(() => import("./Components/ProjectExplore"));
const ProjectProfile = React.lazy(() => import("./Components/ProjectProfile"));

function Routes(props) {
  return (
    <div>
      <HashRouter>
        <Suspense
          fallback={
            <div className="spinner">
              <Spin size="large" tip="Loading..." />
            </div>
          }
        >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/project/explore/:id" component={ProjectExplore} />
            <Route path="/myprofile" component={ProjectProfile} />
          </Switch>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default Routes;
