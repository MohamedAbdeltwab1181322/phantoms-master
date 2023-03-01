import React from "react";

import coach from "../../assets/pics/home04.png";
import QuoteICon from "../../components/icons/quoteIcon";

import "./quote.scoped.scss";

const Quote = (props) => {
  return (
    <section className="quote">
      <div className="pic">
        <img src={coach} alt="" />
      </div>
      <div className="content">
        <div className="ico">
          <QuoteICon />
        </div>
        <p>
          Everyone wants to be on a winning team, but no one wants to come to
          practice. One more thing you should always remember is that you don't
          play against opponents, you play against the game of basketball.
        </p>
        <h3 className="name">MIKE KNIGHT</h3>
        <sub>HEAD COACH</sub>
      </div>
    </section>
  );
};

export default Quote;
