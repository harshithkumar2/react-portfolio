import React from "react";
const Timeline = React.lazy(() => import("./Timeline"));
const Navigation = React.lazy(() => import("./Navigation"));

function Skill() {
  return (
    <div>
      <Navigation />
      <Timeline />
    </div>
  );
}

export default Skill;
