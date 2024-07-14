import React, { useState, useEffect } from "react";
import "../styles/LeftMenu.css";
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";
import { MenuPlayList } from "./MenuPlayList";
import TrackList from "./TrackList";
import { searchTracks } from "./spotify";
import AudioList from "./AudioList";
import MusicPlayer from "./MusicPlayer";


function LeftMenu({ query, setQuery, handleSearch, tracks }) {
  
  const handleChange = (e) => {
    setQuery(e.target.value); 
  };

  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <div className="logo">
          <i>
            <FaSpotify />
          </i>
          <h2>My Music</h2>
        </div>
        <i>
          <FaEllipsisH />
        </i>
      </div>

      <div className="searchBox">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
        />
        <i onClick={handleSearch}>
          <BiSearchAlt />
        </i>
      </div>

      <Menu title={"Menu"} listObject={MenuList} />
      <MenuPlayList />

      {tracks.length > 0 && (
        <TrackList
          trackName={tracks[0].name}
          artistName={tracks[0].images} 
        />
        
       
      )}
         
    </div>
  );
}

export { LeftMenu };
