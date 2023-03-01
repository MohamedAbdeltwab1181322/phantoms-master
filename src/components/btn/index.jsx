import React from "react";
import { Link } from "react-router-dom";

import "./btn.scss";

const Btn = (props) => {
  let { children, circle, link } = props;
  if (link) {
    return (
      <div className="btn link">
        <Link {...props}>{children}</Link>
      </div>
    );
  }
  return (
    <div className={"btn" + circle ? " circle" : ""}>
      <button {...props}>{children}</button>
    </div>
  );
};

export default Btn;
