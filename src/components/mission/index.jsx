import React from "react";

import "./mission.scoped.scss";

const Mission = ({ ico, title, desc }) => {
  return (
    <div className="mission">
      <div className="ico">
        <i className={`fas fa-${ico}`} />
      </div>
      <div className="title">
        <h5 className="hero5">{title}</h5>
      </div>
      <div className="desc">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Mission;
