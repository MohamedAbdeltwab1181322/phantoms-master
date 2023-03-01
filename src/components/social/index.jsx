import React from "react";
import { Link } from "react-router-dom";

import "./social.scoped.scss";

const Social = ({ to, type }) => {
  switch (type) {
    case "fb":
      return fb;
    case "gp":
      return gp;
    case "pt":
      return pt;
    case "tw":
      return tw;
    case "yt":
      return yt;

    default:
      return;
  }
};
const fb = <Link className="social-link icon fab fa-facebook-f" to={"/"} />;
const gp = <Link className="social-link icon fab fa-google-plus-g" to={"/"} />;
const pt = <Link className="social-link icon fab fa-pinterest-p" to={"/"} />;
const tw = <Link className="social-link icon fab fa-twitter" to={"/"} />;
const yt = <Link className="social-link icon fab fa-youtube" to={"/"} />;

export default Social;
