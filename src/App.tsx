import React, { useState } from "react";

import IHeroAspectPair from "./Models/IHeroAspectPair";
import IScenario from "./Models/IScenario";

import NumberOfPlayerSelector from "./View/NumberOfPlayersSelector";
import PlayerDisplay from "./View/PlayerDisplay";
import Scenario from "./View/Scenario";
import { generatePlayers, generateScenario } from "./Functionality/Generator";
import logo from "./Resources/mc_logo.png";
import "./App.css";

function App() {
  const [heroAspectPairs, setHeroAspectPairs] = useState<IHeroAspectPair[]>([]);
  const [scenario, setScenario] = useState<IScenario>();
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);

  function generate() {
    setHeroAspectPairs(generatePlayers(numberOfPlayers));
    setScenario(generateScenario());
  }

  return (
    <div>
      <img src={logo} alt="Marvel Champions Logo" className="mc-main-logo" />
      <NumberOfPlayerSelector
        numberOfPlayers={numberOfPlayers}
        onNumberOfPlayersSelected={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNumberOfPlayers(+e.target.value)
        }
      />
      <button onClick={generate}>Generate!</button>
      <PlayerDisplay heroAspectPairs={heroAspectPairs} />
      <Scenario scenario={scenario} />
    </div>
  );
}

export default App;
