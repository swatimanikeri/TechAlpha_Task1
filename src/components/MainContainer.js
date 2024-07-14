import React, { useEffect, useState } from "react";
import "../styles/MainContainer.css";
import MusicPlayer from "./MusicPlayer";
import { getNewReleases } from "./spotify";
import AlbumContainer from "./AlbumContainer";

function MainContainer({ tracks }) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const newReleases = await getNewReleases();
        console.log('Fetched albums:', newReleases); 
        if (newReleases && newReleases.length > 0) {
          setAlbums(newReleases);
        } else {
          console.error("Empty response from getNewReleases");
        }
      } catch (error) {
        console.error("Error fetching new releases:", error);
      }
    };

    fetchAlbums();
  }, []);

  
  const defaultTrack = {
    preview_url: "",
    album: {
      images: [{ url: "default-image-url" }]
    }
  };

  return (
    <div className="mainContainer">
      <h1 className="sectionTitle">Top Trending</h1>
      <div className="albumList">
        {albums.slice(0, 10).map((album, index) => (
          <AlbumContainer key={index} album={album} />
        ))}
      </div>

      <h2 className="sectionTitle">New Releases</h2>
      <div className="albumList">
        {albums.slice(10, 20).map((album, index) => (
          <AlbumContainer key={index + 10} album={album} />
        ))}
      </div>

      <MusicPlayer
        song={(tracks && tracks.length > 0) ? tracks[0].preview_url : defaultTrack.preview_url}
        imgSrc={(tracks && tracks.length > 0) ? tracks[0].album.images[0].url : defaultTrack.album.images[0].url}
      />
    </div>
  );
}

export {MainContainer};
