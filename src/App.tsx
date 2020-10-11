import React, { useState } from 'react';
import NumberOfPlayerSelector from './NumberOfPlayersSelector';
import PlayerDisplay from './PlayerDisplay';
import Villain from './Villain'

function App() {
  
  // const [heroAspectPairs, setHero] = useState([]);
  // const [aspect, setAspect] = useState([]);
  // const [villain, setVillain] = useState();
  // const [modularSet, setModularSet] = useState([]);
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);

  function generate() {
    // let generatedHeroes = getRandom(HeroList, numberOfPlayers);
    // setHero(generatedHeroes);
    // setAspect(getRandom(AspectList, generatedHeroes.numberOfAspects));

    // let generatedVillain = getRandom(VillainList, 1);
    // setVillain(generatedVillain.name);
    // setModularSet(getRandom(ModularSetList, generatedVillain.numberOfModularSets));
  }

  const onNumberOfPlayersSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue : number = +event.target.value;
    setNumberOfPlayers(newValue)
  }
  
  const heroAspectPairs = [
    {hero: "Black Widow", aspects: ["Justice"]},
    {hero: "Spider-Woman", aspects: ["Aggression", "Protection"]}];

  const villain = {
    name: "Crossbones",
    modularSets: ["Legions of Hydra", "Weapon Master", "Hydra Assault"]
  };

  return (
    <div>
      <NumberOfPlayerSelector numberOfPlayers={numberOfPlayers} onNumberOfPlayersSelected={onNumberOfPlayersSelected} />
      <button onClick={generate}>Generate!</button>
      <PlayerDisplay heroAspectPairs={heroAspectPairs}/>
      <Villain villain={villain}/>
    </div>);
}

export default App;
