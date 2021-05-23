import React, { Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
// import Home from "./Components/Home";
// import ProjectExplore from "./Components/ProjectExplore";
// import ProjectProfile from "./Components/ProjectProfile";
// import LinearProgress from "@material-ui/core/LinearProgress";

import "./Components/spinner.css";

const Home = React.lazy(() => import("./Components/Home"));
const ProjectExplore = React.lazy(() => import("./Components/ProjectExplore"));
const ProjectProfile = React.lazy(() => import("./Components/ProjectProfile"));
const Skill = React.lazy(() => import("./Components/Skill"));

function Routes(props) {
  return (
    <div>
      <HashRouter>
        <Suspense
          fallback={
            <div className="container">
              <div className="circle circle-red"></div>
              <div className="circle circle-blue"></div>
              <div className="circle circle-green"></div>
            </div>
          }
        >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/project/explore/:id" component={ProjectExplore} />
            <Route path="/myprofile" component={ProjectProfile} />
            <Route path="/skills" component={Skill} />
          </Switch>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default Routes;
