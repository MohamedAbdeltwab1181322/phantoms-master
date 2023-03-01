import React from "react";

import "./team.scoped.scss";

const Team = ({ rev, children, pic }) => {
  return (
    <div className={rev ? "team rev" : "team"}>
      <img src={pic.default} alt="" />
      <h2 className="name hero1">{children}</h2>
    </div>
  );
};

export default Team;
