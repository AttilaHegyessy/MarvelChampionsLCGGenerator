import React from "react";
import { ButtonGroup, ToggleButton, Row, Col } from "react-bootstrap";

interface INumberOfPlayersSelector {
  numberOfPlayers: number;
  // eslint-disable-next-line no-unused-vars
  onNumberOfPlayersSelected: (value: number) => void;
}

export default function NumberOfPlayersSelector({
  numberOfPlayers,
  onNumberOfPlayersSelected,
}: INumberOfPlayersSelector) {
  const options = [1, 2, 3, 4];

  return (
    <Col>
      <h5 className="number-of-players-label">Number of players</h5>
      <Row>
        <ButtonGroup size="lg" toggle>
          {options.map((option, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="secondary"
              name="radio"
              value={option}
              checked={numberOfPlayers === option}
              onChange={(e) => {
                const selectedValue: number = +e.currentTarget.value;
                onNumberOfPlayersSelected(selectedValue);
              }}
            >
              {option}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </Row>
    </Col>
  );
}
