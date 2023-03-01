import React from "react";
import Pic from "../../components/pic";

import g1 from "../../assets/pics/gallery01.jpg";
import g2 from "../../assets/pics/gallery02.jpg";
import g3 from "../../assets/pics/gallery03.jpg";
import g4 from "../../assets/pics/gallery04.jpg";
import g5 from "../../assets/pics/gallery05.jpg";

import "./gallery.scoped.scss";

const Gallery = (props) => {
  let pics = [
    [
      {
        img: g1,
        title: "BASKETBALL CHAMPIONSHIPS",
        desc:
          "At SkyThrow, we regularly organize events and championships for the members of our club.",
      },
      {
        img: g2,
        title: "FIRST-CLASS GEAR",
        desc:
          "We provide all our players and club members with the high-quality basketball gear and apparel.",
      },
    ],
    [
      {
        img: g3,
        title: "QUALIFIED COACHES",
        desc:
          "At SkyThrow, we regularly organize events and championships for the members of our club.",
      },
      {
        img: g4,
        title: "TRAINING FACILITIES",
        desc:
          "Looking for a comfortable place to develop your basketball skills? SkyThrow has a lot to offer you!",
      },
      {
        img: g5,
        title: "UNIQUE ATMOSPHERE",
        desc:
          "SkyThrow offers friendly and uniting atmosphere for all players to develop and grow.",
      },
    ],
  ];
  return (
    <section className="gallery">
      <div className="section-title">Gallery</div>
      <div className="pics">
        {pics.map((row, i) => (
          <div className={"row row" + i} key={i}>
            {row.map((pic, i) => (
              <Pic {...pic} key={i} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
