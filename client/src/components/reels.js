import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
const reelsURl = `http://localhost:5000/reels`;

export default function Reels() {
  const [reels, setReels] = useState([]);

  const getReels = () => {
    axios.get(reelsURl).then(res => {
      setReels(res.data);
    });
  };

  useEffect(() => {
    getReels();
  }, []);

  const mappedReels = reels.map((reel, index) => (
    <div className="reels__div-small" key={index}>
      <h2 className="reels__video-heading">VIDEO</h2>
      <ReactPlayer
        url={reel.url}
        paused={"true"}
        width="375px"
        height="300px"
        controls
        className="reels__video"
      />
    </div>
  ));

  return <div className="reels">{mappedReels}</div>;
}
