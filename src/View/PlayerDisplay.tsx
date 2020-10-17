import React from "react";
import { Card } from "react-bootstrap";
import IHeroAspectPair from "../Models/IHeroAspectPair";
import HeroAspectPair from "./HeroAspectPair";

interface IPlayerDisplay {
  heroAspectPairs: IHeroAspectPair[];
}

export default function PlayerDisplay({ heroAspectPairs }: IPlayerDisplay) {
  return heroAspectPairs.length === undefined ? null : (
    <>
      {heroAspectPairs.map((pair, index) => (
        <Card style={{ width: "500px" }} key={`${pair.hero}${index}`}>
          <Card.Header as="h5">Player {index + 1}</Card.Header>
          <Card.Body>
            <Card.Text>
              <HeroAspectPair hero={pair.hero} aspects={pair.aspects} />
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
