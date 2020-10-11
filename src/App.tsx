import React, { useState } from 'react';
import NumberOfPlayerSelector from './NumberOfPlayersSelector';
import PlayerDisplay from './PlayerDisplay';
import Villain from './Villain'
import { getRandom } from './Randomizer';
import { HeroList } from './Data/HeroList';
import { AspectList } from './Data/AspectList';

function App() {
  interface HeroAspectPair {
    hero : string;
    aspects : string[];
  }

  interface Villain {
    name: string;
    modularSets : string[];
  }

  const [heroAspectPairs, setHeroAspectPairs] = useState<HeroAspectPair[]>([]);
  // const [aspect, setAspect] = useState([]);
  // const [villain, setVillain] = useState();
  // const [modularSet, setModularSet] = useState([]);
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);

  function generate() {
    let generatedHeroes : HeroAspectPair[] = [];

    for (let i = 0; i < numberOfPlayers; ++i) {
      let hero = getRandom(HeroList)[0];
      generatedHeroes.push({hero: hero.name, aspects: getRandom(AspectList, hero.numberOfAspects)});
    }

    setHeroAspectPairs(generatedHeroes);
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
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const heroAspectPairsMock = [
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
