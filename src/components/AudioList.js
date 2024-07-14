import React, { useState, useEffect } from "react";
import "../styles/LeftMenu.css";
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
import MusicPlayer from "./MusicPlayer";
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import TrackList from "./TrackList";
import { LeftMenu } from "./LeftMenu";

function AudioList({tracks}) {
  const [favourite, setFavourite] = useState(false); // State to manage favorite status

  // Function to toggle favorite status
  const toggleFavourite = () => {
    setFavourite((prevFavourite) => !prevFavourite);
  };

  return (
    <>
        {tracks.length > 0 && (
        <MusicPlayer
          song={tracks[0].preview_url} // Accesses the track name
          artistName={tracks[0].artist} // Accesses the name of the first artist
        />
      )}
    </>
   
  );
}

export  { AudioList };
