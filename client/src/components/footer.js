import React from "react";
import Instagram from "../assets/svg/instagram.svg";
import Facebook from "../assets/svg/facebook.svg";
import Twitter from "../assets/svg/twitter.svg";
import Vimeo from "../assets/svg/vimeo.svg";

export default function Footer() {
  return (
    <div className="footer">
      <h2 className="footer__header">Ken Friss</h2>
      <h3 className="footer__header">Director/Film Maker</h3>
      <h4 className="footer__header">Email:</h4>
      <div className="social__widgets">
        <div className="social__widgets-div-small">
          <img
            src={Instagram}
            alt="instagram"
            className="social__widgets-image"
          />
          <img
            src={Facebook}
            alt="Facebook"
            className="social__widgets-image"
          />
          <img src={Twitter} alt="Twitter" className="social__widgets-image" />
          <img src={Vimeo} alt="Vimeo" className="social__widgets-image" />
        </div>
        <div>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </div>
  );
}
