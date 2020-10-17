import React from "react";
import Hero from "./Hero";
import Aspect from "./Aspect";
import IHeroAspectPair from "../Models/IHeroAspectPair";

const HeroAspectPair = ({ hero, aspects }: IHeroAspectPair) => {
  return (
    <table>
      <tr>
        <td>
          <Hero heroName={hero} />
        </td>
        <td>
          {aspects.map((aspect) => (
            <Aspect key={aspect} aspectName={aspect} />
          ))}
        </td>
      </tr>
    </table>
  );
};

export default HeroAspectPair;
