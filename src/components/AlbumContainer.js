import React from "react";
import "../styles/AlbumContainer.css";

function AlbumContainer({ album }) {
  console.log(album); 

  return (
    <div className="albumContainer">
      <img src={album.images[0].url} alt={album.name} className="albumImage" />
      <div className="albumInfo">
        <h3>{album.name}</h3>
        <p>{album.artists.map(artist => artist.name).join(", ")}</p>
      </div>
    </div>
  );
}

export default AlbumContainer;
