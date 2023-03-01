import React from "react";
import Btn from "../../components/btn";
import Team from "../../components/team";

import "./nextGame.scoped.scss";

const NextGame = (props) => {
  return (
    <section className="next-game">
      <div className="content">
        <h2 className="title colored">Next Game</h2>
        <div className="row teams">
          <Team pic={require("../../assets/pics/team01.png")}>
            MINNESOTA
            <br />
            CHALLENGERS
          </Team>
          <h1 className="vs">vs</h1>
          <Team pic={require("../../assets/pics/team02.png")} rev>
            DELAWARE
            <br />
            HAWKS
          </Team>
        </div>
        <div className="row center">
          <div className="time">
            <p>JULY 3, 2020</p>
            <span className="sep" />
            <p>7:00 PM</p>
          </div>
          <div id="buy">
            <Btn link="true" to="/">
              Buy Tickets
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextGame;
