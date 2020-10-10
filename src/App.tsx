import React, { useState } from 'react';
import Hero from './Hero';
import Aspect from './Aspect';
import Villain from './Villain'
import ModularSet from './ModularSet';
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
  const [heroTest, setHeroTest] = useState(new Map());

  function generate() {
    let generatedHero = getRandom(Heroes, 1);
    setHero(generatedHero.name);
    setAspect(getRandom(Aspects, generatedHero.numberOfAspects));

    let generatedVillain = getRandom(Villains, 1);
    setVillain(generatedVillain.name);
    setModularSet(getRandom(ModularSets, generatedVillain.numberOfModularSets));
  }

  function testGeneratedItems() {
    interface heroCount {
      name: string;
      count: number;
    }

    var heroCounter : Map<string, number> = new Map<string, number>();
    Heroes.forEach((hero) => heroCounter.set(hero.name, 0));
    
    for (let i = 0; i < 100; ++i) {
      let rand = getRandom(Heroes, 1);
      let prevValue = heroCounter?.get(rand.name) ?? 0;
      heroCounter.set(rand.name, prevValue + 1);
    }
    debugger;
    setHeroTest(heroCounter);
  }

  return (
    <div>
      {/* <button onClick={testGeneratedItems}>Test</button>
      {Array.from(heroTest.keys()).map(hero => {debugger; return <p>{hero} - {heroTest.get(hero)}</p>})} */}

      <button onClick={generate}>Generate!</button>
      <Hero hero={hero}/>
      <Aspect aspects={aspect}/>
      <Villain villain={villain}/>
      <ModularSet modularSets={modularSet}/>
    </div>);
  

}

export default App;
