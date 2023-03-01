import React from "react";
import About from "../../containers/about";
import Events from "../../containers/events";
import Footer from "../../containers/footer";
import Gallery from "../../containers/gallery";
import Missions from "../../containers/missions";
import NextGame from "../../containers/nextGame";
import Partners from "../../containers/partners";
import Quote from "../../containers/quote";
import Season from "../../containers/season";

const Home = (props) => {
  return (
    <div className="page">
      <div className="home">
        <About />
        <Season />
        <Missions />
        <Gallery />
        <Quote />
        <NextGame />
        <Events />
        <Partners />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
