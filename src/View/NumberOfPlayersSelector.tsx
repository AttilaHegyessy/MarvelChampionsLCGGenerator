import React, { useState } from "react";
import { ButtonGroup, ToggleButton, Row, Col } from "react-bootstrap";

interface INumberOfPlayersSelector {
  numberOfPlayers: number;
  // eslint-disable-next-line no-unused-vars
  onNumberOfPlayersSelected: (value: number) => void;
}

const NumberOfPlayersSelector = ({
  numberOfPlayers,
  onNumberOfPlayersSelected,
}: INumberOfPlayersSelector) => {
  const options = [1, 2, 3, 4];
  const [selectedNumberOfPlayers, setSelectedNumberOfPlayers] = useState(
    numberOfPlayers
  );

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
              checked={selectedNumberOfPlayers === option}
              onChange={(e) => {
                const selectedValue: number = +e.currentTarget.value;
                setSelectedNumberOfPlayers(selectedValue);
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

  // return (
  //   <div>
  //     <input
  //       type="radio"
  //       value="1"
  //       checked={numberOfPlayers === 1}
  //       onChange={onNumberOfPlayersSelected}
  //     />
  //     1
  //     <input
  //       type="radio"
  //       value="2"
  //       checked={numberOfPlayers === 2}
  //       onChange={onNumberOfPlayersSelected}
  //     />
  //     2
  //     <input
  //       type="radio"
  //       value="3"
  //       checked={numberOfPlayers === 3}
  //       onChange={onNumberOfPlayersSelected}
  //     />
  //     3
  //     <input
  //       type="radio"
  //       value="4"
  //       checked={numberOfPlayers === 4}
  //       onChange={onNumberOfPlayersSelected}
  //     />
  //     4
  //   </div>
  // );
};

export default NumberOfPlayersSelector;
