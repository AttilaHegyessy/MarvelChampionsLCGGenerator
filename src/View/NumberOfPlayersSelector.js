import React from 'react';

const NumberOfPlayersSelector = (props) => {
    return (
        <div>
            <input type='radio' value='1' checked={props.numberOfPlayers === 1} onChange={props.onNumberOfPlayersSelected}/>1
            <input type='radio' value='2' checked={props.numberOfPlayers === 2} onChange={props.onNumberOfPlayersSelected}/>2
            <input type='radio' value='3' checked={props.numberOfPlayers === 3} onChange={props.onNumberOfPlayersSelected}/>3
            <input type='radio' value='4' checked={props.numberOfPlayers === 4} onChange={props.onNumberOfPlayersSelected}/>4
      </div>
    );
}

export default NumberOfPlayersSelector;