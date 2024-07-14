import React, { useState, useRef } from "react";
import "../styles/MusicPlayer.css";

function MusicPlayer({ song, imgSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Error attempting to play audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="musicPlayer">
      <div className="songImage">
        <img src={imgSrc} alt="Song Cover" />
      </div>
      <div className="songAttributes">
        <div className="top">
          <div className="left">
            <i className="fa fa-heart"></i>
            <i className="fa fa-download download"></i>
          </div>
          <div className="middle">
            <i className="fa fa-backward back"></i>
            <div className="playPause" onClick={handlePlayPause}>
              <i className={`fa fa-${isPlaying ? "pause" : "play"}`}></i>
            </div>
            <i className="fa fa-forward forward"></i>
          </div>
          <div className="right">
            <i className="fa fa-share-alt"></i>
          </div>
        </div>
        <div className="bottom">
          <div className="currentTime">0:00</div>
          <input
            type="range"
            className="progressBar"
            min="0"
            max="100"
            value="0"
          />
          <div className="duration">3:30</div>
        </div>
      </div>
      <audio ref={audioRef} src={song}></audio>
    </div>
  );
}

export default MusicPlayer;
