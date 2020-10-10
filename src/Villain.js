import React from 'react'
import { DisplayElement } from './DisplayElement'

function Villain(props) {
    return (
        <>
            <h1>Villain:</h1>
            <DisplayElement name={props.villain}/>
        </>
    );
}

export default Villain;