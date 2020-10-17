import React from "react";
import { DisplayElement } from "./DisplayElement";
import IScenario from "../Models/IScenario";

interface IScenarioProp {
  scenario?: IScenario;
}

function Scenario({ scenario }: IScenarioProp) {
  return scenario === undefined ? null : (
    <>
      <h1>Villain</h1>
      <DisplayElement value={scenario.villain_name} />
      {scenario.modularSets.length > 0 && (
        <>
          <h1>Modular sets</h1>
          {scenario?.modularSets.map((modularSet) => (
            <DisplayElement key={modularSet} value={modularSet} />
          ))}
        </>
      )}
    </>
  );
}

export default Scenario;
