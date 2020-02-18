import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/ken-logo.gif";

export default function header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="logo" className="header__logo" />
      </Link>
      <ul className="header__list">
        <li className="header__list-item">
          <Link to="/about">
            <h6 className="header__heading-link">About</h6>
          </Link>
        </li>
        <li className="header__list-item">
          <Link to="/reels">
            <h6 className="header__heading-link">Reels</h6>
          </Link>
        </li>
        <li className="header__list-item">
          <Link to="/gallery">
            <h6 className="header__heading-link">Gallery</h6>
          </Link>
        </li>
        <li className="header__list-item">
          <Link to="/contact">
            <h6 className="header__heading-link">Contact</h6>
          </Link>
        </li>
      </ul>
    </div>
  );
}
