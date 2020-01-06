import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/photos/ken-profile.jpg";

export default function header() {
  return (
    <div className="header">
      <input type="checkbox" name="sideBar" className="header__checkbox"  />
      <span className="header__icon"></span>

      <ul className="header__list">
        <img
          src={profilePic}
          alt="ken-director"
          className="header__list-image"
        />
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
      </ul>
    </div>
  );
}
