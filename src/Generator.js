import { getRandom } from './Randomizer';
import { HeroList } from './Data/HeroList';
import { AspectList } from './Data/AspectList'
import { VillainList } from './Data/VillainList';
import { ModularSetList} from './Data/ModularSetList';

let addedHeroes = [];
let addedAspects = [];

const reset = () => {
    addedHeroes = [];
    addedAspects = [];
}

const generatePlayer = () => {
    let hero = getRandom(HeroList)[0];

    while (addedHeroes.includes(hero.name)) {
        hero = getRandom(HeroList)[0];
    }

    let aspects = getRandom(AspectList, hero.numberOfAspects);
    while (addedAspects.includes(aspects[0])) {
        aspects = getRandom(AspectList, hero.numberOfAspects);
    }

    addedHeroes.push(hero.name);
    addedAspects.push(aspects[0])
    
    return {hero: hero.name, aspects: aspects };
}

export const generatePlayers = (numOfPlayers) => {
    reset();
    let players = [];
    
    for (let i = 0; i < numOfPlayers; ++i) {
        players.push(generatePlayer());
    }

    return players;
}

export const generateScenario = () => {
    let villain = getRandom(VillainList)[0];

    return {villain_name: villain.name, modularSets: getRandom(ModularSetList, villain.numberOfModularSets)};
}
