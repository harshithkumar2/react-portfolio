import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import ProjectExplore from "./Components/ProjectExplore";
import ProjectProfile from "./Components/ProjectProfile";
function Routes(props) {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project/explore/:id" component={ProjectExplore} />
          <Route path="/myprofile" component={ProjectProfile} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default Routes;
