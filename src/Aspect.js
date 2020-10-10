import React from 'react';
import { DisplayElement } from './DisplayElement';

function Aspect(props) {
    function getAsArray(object) {
        return Array.isArray(object) ? object : [object];
    }

    return (
        <>
            <h1>Aspect(s): </h1>
            <ul>
                {getAsArray(props.aspects).map((aspect) => <li key={aspect}><DisplayElement name={aspect}/></li>)}
            </ul>
        </>
    );
}

export default Aspect;