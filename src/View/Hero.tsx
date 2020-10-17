import React from "react";
import { DisplayElement } from "./DisplayElement";

interface IHero {
  heroName: string;
}

function Hero({ heroName }: IHero) {
  return <DisplayElement value={heroName} />;
}

export default Hero;
