import React from 'react'
import { DisplayElement } from './DisplayElement'

function ModularSet(props) {
    function getAsArray(object) {
        return Array.isArray(object) ? object : [object];
    }

    return (
        <>
            <h1>Modular set(s): </h1>
            <ul>
                {getAsArray(props.modularSets).map((modularSet) => <li key={modularSet}><DisplayElement name={modularSet}/></li>)}
            </ul>
        </>
    );
}

export default ModularSet;