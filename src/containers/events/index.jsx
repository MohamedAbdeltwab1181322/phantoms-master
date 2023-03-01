import React from "react";
import Event from "../../components/event";

import "./events.scoped.scss";

const Events = (props) => {
  let eves = [
    {
      pic: require("../../assets/pics/event01.jpg"),
      date: "SEPTEMBER 07",
      title: "JUMPERS — LAKERS",
      address: "Sports Hall, New York, NY",
      from: "Tuesday, 8:00 am",
      to: "Wednesday, 5:00 pm",
    },
    {
      pic: require("../../assets/pics/event02.jpg"),
      date: "SEPTEMBER 12",
      title: "BULLS — NEW YORKERS",
      address: "Sports Hall, New York, NY",
      from: "Tuesday, 8:00 am",
      to: "Wednesday, 5:00 pm",
    },
    {
      pic: require("../../assets/pics/event03.jpg"),
      date: "OCTOBER 05",
      title: "BIG SLAM — OKLAHOMA",
      address: "Houston House, Dallas, TX",
      from: "Tuesday, 8:00 am",
      to: "Wednesday, 5:00 pm",
    },
  ];
  return (
    <section className="events">
      <h1 className="section-title">EVENTS</h1>
      <h3 className="title">UPCOMING EVENTS</h3>
      <div className="row">
        {eves.map((eve, i) => (
          <Event {...eve} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Events;
