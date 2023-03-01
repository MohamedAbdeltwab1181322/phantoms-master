import React from "react";
import Btn from "../../components/btn";
import Social from "../../components/social";

import "./footer.scoped.scss";

const Footer = (props) => {
  return (
    <footer>
      <div className="row">
        <div className="about">
          <h4 className="title">About Us</h4>
          <div className="content">
            <p>
              Our club offers opportunity for men, women, boys and girls of any
              age or skill level to play basketball for the fun and enjoyment of
              the game, in accordance with the Basketball Victoria Codes of
              Conduct and our own club Rules and By-Laws.
            </p>
          </div>
        </div>
        <div className="contact">
          <h4 className="title">CONTACT US</h4>
          <div className="content">
            <p>
              We are always happy to assist you in choosing the best basketball
              training for you or your kids. Feel free to contact us anytime.
            </p>
            <div className="methods">
              <div className="row center method">
                <div className="ico">
                  <i className="colored fas fa-map-marked-alt" />
                </div>
                <p>2270 Oak Street, New York, NY</p>
              </div>
              <div className="row center method">
                <div className="ico">
                  <i className="colored fas fa-phone" />
                </div>
                <p>+800-1234-56-78, +908-2888-23-33</p>
              </div>
              <div className="row center method">
                <div className="ico">
                  <i className="colored fas fa-envelope-open-text" />
                </div>
                <p>mail@demolink.org</p>
              </div>
            </div>
          </div>
        </div>
        <div className="follow">
          <h4 className="title">SIGN UP FOR UPDATES</h4>
          <div className="content">
            <div className="newsletter">
              <input type="email" placeholder="Email" />
              <div className="btn">
                <Btn link="true" to="/">
                  Subscribe Now
                </Btn>
              </div>
            </div>
            <div className="socials">
              <p>Follow us on:</p>
              <div className="content">
                <Social type="fb" to="#" />
                <Social type="gp" to="#" />
                <Social type="pt" to="#" />
                <Social type="tw" to="#" />
                <Social type="yt" to="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyrights">
        2021 © SkyThrow. All Rights Reserved | Privacy Policy
      </p>
    </footer>
  );
};

export default Footer;
