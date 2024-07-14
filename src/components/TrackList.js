import React, { useState, useRef } from "react";
import "../styles/LeftMenu.css";
import Track from "../img/track.png";
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop, FaPlay, FaPause } from "react-icons/fa";

function TrackList({ trackName, artistName, previewUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="trackList">
      <div className="top">
        <img src={Track} alt="Track" />
        <p>
          {trackName} <span>{artistName}</span>
        </p>
        <button onClick={handlePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <audio ref={audioRef} src={previewUrl} />
      </div>
      <div className="bottom">
        <i>
          <BsFillVolumeUpFill />
        </i>
        <input type="range" />
        <i>
          <BsMusicNoteList />
        </i>
        <i>
          <FaDesktop />
        </i>
      </div>
    </div>
  );
}

export default TrackList;
