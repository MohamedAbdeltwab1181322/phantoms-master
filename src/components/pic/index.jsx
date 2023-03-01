import React from "react";

import "./pic.scoped.scss";

const Pic = ({ img, title, desc }) => {
  return (
    <div className="pic">
      <img src={img} alt="" />
      <div className="overlay">
        <div className="content">
          <h5>{title}</h5>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Pic;
