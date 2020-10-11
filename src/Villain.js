import React from 'react'
import { DisplayElement } from './DisplayElement'

function Villain(props) {
    return (
        <>
            <h1>Villain:</h1>
            <DisplayElement name={props.villain.name}/>
            <h1>Modular sets:</h1>
            {props.villain.modularSets.map((modularSet)=> <DisplayElement name={modularSet}/>)}
        </>
    );
}

export default Villain;