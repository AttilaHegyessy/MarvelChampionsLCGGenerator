import React from "react";

interface INumberOfPlayersSelector {
  numberOfPlayers: number;
  // eslint-disable-next-line no-unused-vars
  onNumberOfPlayersSelected: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberOfPlayersSelector = ({
  numberOfPlayers,
  onNumberOfPlayersSelected,
}: INumberOfPlayersSelector) => {
  return (
    <div>
      <input
        type="radio"
        value="1"
        checked={numberOfPlayers === 1}
        onChange={onNumberOfPlayersSelected}
      />
      1
      <input
        type="radio"
        value="2"
        checked={numberOfPlayers === 2}
        onChange={onNumberOfPlayersSelected}
      />
      2
      <input
        type="radio"
        value="3"
        checked={numberOfPlayers === 3}
        onChange={onNumberOfPlayersSelected}
      />
      3
      <input
        type="radio"
        value="4"
        checked={numberOfPlayers === 4}
        onChange={onNumberOfPlayersSelected}
      />
      4
    </div>
  );
};

export default NumberOfPlayersSelector;
