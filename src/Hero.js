import React from 'react';
import { DisplayElement } from './DisplayElement';

function Hero(props){
    return (
        <>
            <DisplayElement name={props.hero}/>    
        </>
    );
}

export default Hero;