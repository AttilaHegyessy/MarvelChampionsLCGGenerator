import React from 'react';
import { DisplayElement } from './DisplayElement';

function Hero(props){
    return (
        <>
            <h1>Hero: </h1>
            <DisplayElement name={props.hero}/>    
        </>
    );
}

export default Hero;