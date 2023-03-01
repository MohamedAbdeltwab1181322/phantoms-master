import React from "react";
import Slider from "react-slick";

import "./partners.scoped.scss";

const Partners = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 480, // mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="partners">
      <Slider {...settings}>
        <div className="partner">
          <img
            src={require("../../assets/pics/partner01.png").default}
            alt=""
          />
        </div>
        <div className="partner">
          <img
            src={require("../../assets/pics/partner02.png").default}
            alt=""
          />
        </div>
        <div className="partner">
          <img
            src={require("../../assets/pics/partner03.png").default}
            alt=""
          />
        </div>
        <div className="partner">
          <img
            src={require("../../assets/pics/partner04.png").default}
            alt=""
          />
        </div>
        <div className="partner">
          <img
            src={require("../../assets/pics/partner05.png").default}
            alt=""
          />
        </div>
      </Slider>
    </section>
  );
};

export default Partners;
