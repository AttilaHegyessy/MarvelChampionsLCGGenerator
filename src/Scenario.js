import React from 'react'
import { DisplayElement } from './DisplayElement'

function Scenario(props) {

    return (
        <>
            <h1>Villain:</h1>
            <DisplayElement name={props.scenario?.villain_name}/>
            <h1>Modular sets:</h1>
            {props.scenario?.modularSets.map((modularSet)=> <DisplayElement key={modularSet} name={modularSet}/>)}
        </>
    );
}

export default Scenario;