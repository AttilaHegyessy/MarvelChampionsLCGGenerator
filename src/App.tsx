import React, { useState } from 'react';
import Hero from './Hero';
import Aspect from './Aspect';
import Villain from './Villain'
import ModularSet from './ModularSet';
import NumberOfPlayerSelector from './NumberOfPlayersSelector';
import { Heroes } from './Data/HeroList';
import { Aspects } from './Data/AspectList';
import { Villains } from './Data/VillainList';
import { ModularSets } from './Data/ModularSetList';
import { getRandom } from './Randomizer';

function App() {
  
  const [hero, setHero] = useState();
  const [aspect, setAspect] = useState([]);
  const [villain, setVillain] = useState();
  const [modularSet, setModularSet] = useState([]);
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);

  function generate() {
    let generatedHero = getRandom(Heroes, numberOfPlayers);
    setHero(generatedHero.name);
    setAspect(getRandom(Aspects, generatedHero.numberOfAspects));

    let generatedVillain = getRandom(Villains, 1);
    setVillain(generatedVillain.name);
    setModularSet(getRandom(ModularSets, generatedVillain.numberOfModularSets));
  }

  const onNumberOfPlayersSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue : number = +event.target.value;
    setNumberOfPlayers(newValue)
  }

  return (
    <div>
      <NumberOfPlayerSelector numberOfPlayers={numberOfPlayers} onNumberOfPlayersSelected={onNumberOfPlayersSelected} />
      <button onClick={generate}>Generate!</button>

      <Hero hero={hero}/>
      <Aspect aspects={aspect}/>
      <Villain villain={villain}/>
      <ModularSet modularSets={modularSet}/>
    </div>);
}

export default App;
