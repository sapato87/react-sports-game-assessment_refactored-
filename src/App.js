import React from "react";
import sabresImage from "./asset/images/sabres.png";
import spartansImage from "./asset/images/spartans.png";
import shuttersImage from "./asset/images/shutters.png";
import lionsImage from "./asset/images/lions.png";

import "./App.css";
import Game from "./components/game/Game";
function App(props) {
  const sabres = {
    name: "Brookfields Sabres",
    logoSrc: sabresImage,
  };

  const spartans = {
    name: "Kainkordu Spartans",
    logoSrc: spartansImage,
  };

  const shutters = {
    name: "Magburaka Eagles",
    logoSrc: shuttersImage,
  };

  const lions = {
    name: "Simbakoro Foxes",
    logoSrc: lionsImage,
  };
  return (
    <div className="App">
      <Game venue="Parade Grounds" homeTeam={sabres} visitingTeam={spartans} />
      <Game venue="Mafa Field" homeTeam={shutters} visitingTeam={lions} />
    </div>
  );
}

export default App;
