import React from "react";
import ReactPlayer from "react-player";

export default function Reels() {
  const reelsUrl = [
    { url: "https://www.youtube.com/watch?v=aYsrZR2PcSc" },
    { url: "https://www.youtube.com/watch?v=9luDsszk8yY" },
    { url: "https://www.youtube.com/watch?v=BHjhYfDunqQ" },
    { url: "https://www.youtube.com/watch?v=0f-HOXTHxok" },
    { url: "https://www.youtube.com/watch?v=Y54dfdonqgM" },
    { url: "https://www.youtube.com/watch?v=c9of9E0e9co" }
  ];

  const mappedReels = reelsUrl.map(reel => (
    <div className="reels__div-small">
      <h2 className="reels__video-heading">VIDEO</h2>
      <ReactPlayer
        url={reel.url}
        paused={"true"}
        width="375px"
        height="600px"
        controls
        className="reels__video"
      />
    </div>
  ));

  return <div className="reels">{mappedReels}</div>;
}
