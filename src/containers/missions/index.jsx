import React from "react";
import Mission from "../../components/mission";

import "./missions.scoped.scss";

const Missions = (props) => {
  const missions = [
    {
      ico: "medal",
      title: "OUR GOAL",
      desc:
        "We believe that basketball should become No. 1 sport among youngsters and adults.",
    },
    {
      ico: "user",
      title: "QUALIFIED COACHES",
      desc:
        "Our club has a team of qualified basketball coaches that take care of your success.",
    },
    {
      ico: "child",
      title: "CHILDREN'S SECTIONS",
      desc:
        "We also offer professional basketball coaching services for children and teens.",
    },
    {
      ico: "users",
      title: "GREAT TEAMWORK",
      desc:
        "Teamwork is one of the main principles that we pursue at our Basketball Club.",
    },
  ];
  return (
    <section className="missions">
      {missions.map((m, i) => (
        <Mission key={i} {...m} />
      ))}
    </section>
  );
};

export default Missions;
