import React from "react";
import IScenario from "../Models/IScenario";
import { Card, Col, Row } from "react-bootstrap";

interface IScenarioProp {
  scenario?: IScenario;
}

function Scenario({ scenario }: IScenarioProp) {
  return scenario === undefined ? null : (
    <>
      <Card style={{ width: "500px" }}>
        <Card.Header as="h5">Villain</Card.Header>
        <Card.Body>
          <Card.Text>
            <Row>
              <Col>{scenario.villain_name}</Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
      {scenario.modularSets.length > 0 && (
        <Card style={{ width: "500px" }}>
          <Card.Header as="h5">Modular sets</Card.Header>
          <Card.Body>
            {scenario.modularSets.map((modularSet) => (
              <Card.Text key={modularSet}>
                <Row>
                  <Col>{modularSet}</Col>
                </Row>
              </Card.Text>
            ))}
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default Scenario;
