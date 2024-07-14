import "./App.css";
import { LeftMenu } from "./components/LeftMenu";
import { MainContainer } from "./components/MainContainer";
import React, { useState, useEffect } from "react";
import { searchTracks } from "./components/spotify";

function App() {
  const [query, setQuery] = useState(""); 
  const [tracks, setTracks] = useState([]); 

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        if (query.trim() !== "") {
          const fetchedTracks = await searchTracks(query);
          setTracks(fetchedTracks);
        } else {
          setTracks([]);
        }
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    };

    fetchTracks();
  }, [query]); 

  const handleSearch = async () => {
    try {
      if (query.trim() !== "") {
        const fetchedTracks = await searchTracks(query);
        setTracks(fetchedTracks);
      } else {
        setTracks([]);
      }
    } catch (error) {
      console.error("Error fetching tracks:", error);
    }
  };

  return (
    <div className="App">
      
      <LeftMenu
        query={query}
        setQuery={setQuery} 
        handleSearch={handleSearch}
        tracks={tracks}
      />
      
      <MainContainer tracks={tracks} />
      
    </div>
  );
}

export default App;
