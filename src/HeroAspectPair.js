import React from 'react';
import Hero from './Hero';
import Aspect from './Aspect';

const HeroAspectPair = (props) => {

    return (
        <>
            <h1>Hero</h1>
            <Hero hero={props.hero}/>
            <h1>Aspects</h1>
            {props.aspects.map((aspect) => <Aspect key={aspect} aspect={aspect}/>)}
        </>
    );

}

export default HeroAspectPair;