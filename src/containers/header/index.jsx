import React from "react";
import Btn from "../../components/btn";
import Nav from "../../components/nav";

import "./header.scoped.scss";

const Header = (props) => {
  return (
    <header>
      <Nav />
      <div className="content">
        <div className="quote">
          <h2 className="hero3">the lifestyle</h2>
          <h1 className="offMarg hero1">that keeps</h1>
          <div className="comp">
            <h1 className="hero1">you</h1>
            <h3 className="hero3 colored">Energized</h3>
          </div>
        </div>
        <p className="desc">
          SkyThrow Basketball Club offers you first-class training facilities,
          the best gear, and specialized skill development in all areas of the
          game.
        </p>
        <div className="btn">
          <Btn link="true" to="/">
            read more
          </Btn>
        </div>
      </div>
    </header>
  );
};

export default Header;
