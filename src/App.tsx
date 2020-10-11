import React, { useState } from 'react';
import NumberOfPlayerSelector from './NumberOfPlayersSelector';
import PlayerDisplay from './PlayerDisplay';
import Scenario from './Scenario'
import { generatePlayers, generateScenario } from './Generator';

function App() {
  interface HeroAspectPair {
    hero : string;
    aspects : string[];
  }

  interface Scenario {
    villain_name: string;
    modularSets : string[];
  }

  const [heroAspectPairs, setHeroAspectPairs] = useState<HeroAspectPair[]>([]);
  const [scenario, setScenario] = useState<Scenario>();
  // const [aspect, setAspect] = useState([]);
  // const [villain, setVillain] = useState();
  // const [modularSet, setModularSet] = useState([]);
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);

  function generate() {
    setHeroAspectPairs(generatePlayers(numberOfPlayers));
    setScenario(generateScenario());
  }

  const onNumberOfPlayersSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue : number = +event.target.value;
    setNumberOfPlayers(newValue)
  }

  return (
    <div>
      <NumberOfPlayerSelector numberOfPlayers={numberOfPlayers} onNumberOfPlayersSelected={onNumberOfPlayersSelected} />
      <button onClick={generate}>Generate!</button>
      <PlayerDisplay heroAspectPairs={heroAspectPairs}/>
      <Scenario scenario={scenario}/>
    </div>);
}

export default App;
