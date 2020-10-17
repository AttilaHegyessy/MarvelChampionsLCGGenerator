import React, { useState } from "react";

import IHeroAspectPair from "./Models/IHeroAspectPair";
import IScenario from "./Models/IScenario";

import NumberOfPlayerSelector from "./View/NumberOfPlayersSelector";
import PlayerDisplay from "./View/PlayerDisplay";
import Scenario from "./View/Scenario";
import { generatePlayers, generateScenario } from "./Functionality/Generator";
import logo from "./Resources/mc_logo.png";
import "./App.css";
import { Button, Container, Image, Row } from "react-bootstrap";
import PlayerDetailsModal from "./View/PlayerDetailsModal";

export default function App() {
  const [heroAspectPairs, setHeroAspectPairs] = useState<IHeroAspectPair[]>([]);
  const [scenario, setScenario] = useState<IScenario>();
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);
  const [isPlayerDetailsModalOpen, setPlayerDetailsModalOpen] = useState(false);

  function generate() {
    setHeroAspectPairs(generatePlayers(numberOfPlayers));
    setScenario(generateScenario());
  }

  return (
    <Container>
      <PlayerDetailsModal
        isVisible={isPlayerDetailsModalOpen}
        handleClose={() => setPlayerDetailsModalOpen(false)}
      />
      {/* <Row>
        <Button onClick={() => setPlayerDetailsModalOpen(true)}>
          Open Modal
        </Button>
      </Row> */}
      <Image src={logo} alt="Marvel Champions Logo" className="mc-main-logo" />
      <Row className="row-with-margin">
        <NumberOfPlayerSelector
          numberOfPlayers={numberOfPlayers}
          onNumberOfPlayersSelected={(e: number) => setNumberOfPlayers(e)}
        />
      </Row>
      <Row className="row-with-margin">
        <Button onClick={generate}>Generate!</Button>
      </Row>
      <PlayerDisplay heroAspectPairs={heroAspectPairs} />
      <Scenario scenario={scenario} />
    </Container>
  );
}
