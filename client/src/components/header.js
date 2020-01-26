import React from "react";
import { Link } from "react-router-dom";
import Instagram from "../assets/svg/instagram.svg";
import Facebook from "../assets/svg/facebook.svg";
import Twitter from "../assets/svg/twitter.svg";
import Vimeo from "../assets/svg/vimeo.svg";

export default function header() {
  return (
    <div className="header">
      <input type="checkbox" name="sideBar" className="header__checkbox" />
      <span className="header__icon"></span>

      <ul className="header__list">
        <h1 className="header__list-heading">Ken Friss</h1>
        <li className="header__list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="header__list-item">
          <Link to="/about">About</Link>
        </li>
        <li className="header__list-item">
          <Link to="/reels">Reels</Link>
        </li>
        <li className="header__list-item">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="header__list-item">
          <Link to="/contact">Contact</Link>
        </li>
        <div className="social__widgets">
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
      </ul>
    </div>
  );
}
