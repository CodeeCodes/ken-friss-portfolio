import React from "react";
import profilePic from "../assets/photos/ken-profile.jpg";
import profilePic2 from "../assets/photos/pic19.jpg";

export default function About() {
  return (
    <div className="about">
      <h1 className="about__heading">About </h1>
      <div className="about__image-div">
        <img
          className="about__text-image-large"
          src={profilePic}
          alt="Ken_Friss_Director_About_Page"
          width="850"
          height="567"
        ></img>
      </div>
      <p className="about__text">
        Ken is a Daytime Emmy-nominated and Leo Award winning director who has
        spent the last two decades developing his craft in the TV and film
        industry. His experience working across numerous styles and genres as a
        director, and previously as a script supervisor, has taught him a
        variety of techniques and given him a keen eye for telling captivating
        stories. He received three Daytime Emmy nominations for Outstanding
        Direction in a Children’s Series for his work on the two time
        Emmy-winning series The Haunting Hour and a fourth nomination for Hub
        Network’s Spooksville.
      </p>
      <img
        className="about__text-image-large"
        src={profilePic2}
        alt="Ken_Friss_Director_About_Page"
        width="850"
        height="567"
      ></img>
      <p className="about__text">
        Ken is a spirited and passionate director who is known for his energy
        and enthusiasm on set. He likes to challenge himself and currently has
        several works in various stages of development including an animated
        series, a comedy series and theatrical thriller. When he’s not busy
        helping to create entertaining and successful projects, Ken can be found
        hanging out with one of his six guitars or playing Quarterback in a
        touch football league. He is still hoping to win a championship. That,
        or meet Tom Waits. Either would be fantastic.
      </p>
      <div className="about__text-div">
        <img
          className="about__text-image"
          src="http://kenfriss.com/wp-content/uploads/2014/12/MV5BMjAzOTcxMDA2Nl5BMl5BcG5nXkFtZTcwMTc1MzIzOA@@._V1_-300x144.png"
          alt="MV5BMjAzOTcxMDA2Nl5BMl5BcG5nXkFtZTcwMTc1MzIzOA@@._V1_"
          width="100"
          height="48"
        ></img>{" "}
        <a
          href="http://www.imdb.com/name/nm0295919/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ken’s IMDB Page
        </a>{" "}
      </div>
    </div>
  );
}
