import React from "react";
import "./event.scoped.scss";

const Event = ({ pic, date, title, address, from, to }) => {
  return (
    <div className="event">
      <div className="pic">
        <img src={pic.default} alt="" />
      </div>
      <h5 className="date colored">{date}</h5>
      <h5 className="title">{title}</h5>
      <div className="more">
        <div className="address row">
          <div className="ico">
            <i className="colored fas fa-map-marker-alt" />
          </div>
          <p>{address}</p>
        </div>
        <div className="calender row">
          <div className="ico">
            <i className="colored fas fa-calendar-check" />
          </div>
          <p>
            {from}, {to}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event;
