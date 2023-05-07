import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Players from "./components/Player";


function App() {
  const initialUrl = "http://localhost:4000/api/players";
  const [players, setPlayers] = useState([]);

  const fetchPlayer = (url) => {
    fetch(url, {
      mode: 'cors'
    })
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchPlayer(initialUrl);
  }, []);


  return (
    <>
      <Navbar brand="APP Player" />

      <div className="container mt-5">
        <Players players={players}/>
      </div>
      <Footer />
    </>
  );
}


export default App;
