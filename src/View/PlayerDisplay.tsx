import React from "react";
import IHeroAspectPair from "../Models/IHeroAspectPair";
import HeroAspectPair from "./HeroAspectPair";

interface IPlayerDisplay {
  heroAspectPairs: IHeroAspectPair[];
}

const PlayerDisplay = ({ heroAspectPairs }: IPlayerDisplay) => {
  return heroAspectPairs.length === undefined ? null : (
    <>
      {heroAspectPairs.map((pair, index) => (
        <>
          <h1>Player {index + 1}</h1>
          <HeroAspectPair
            key={pair.hero}
            hero={pair.hero}
            aspects={pair.aspects}
          />
        </>
      ))}
    </>
  );
};

export default PlayerDisplay;
