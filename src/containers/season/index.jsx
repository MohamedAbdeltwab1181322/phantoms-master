import React from "react";
import Btn from "../../components/btn";

import "./season.scoped.scss";

const Season = (props) => {
  return (
    <section className="season">
      <div className="content">
        <div className="row">
          <p className="small">season</p>
          <h1 className="hero1">2020</h1>
          <h3>
            we
            <br />
            create
          </h3>
        </div>
        <h1 className="hero3 colored">New stars</h1>
        <div className="btn">
          <Btn link="true" to="#">
            Join Now
          </Btn>
        </div>
      </div>
    </section>
  );
};

export default Season;
