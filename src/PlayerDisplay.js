import React from 'react';
import HeroAspectPair from './HeroAspectPair'; 

const PlayerDisplay = (props) => {
    return (
        <>
            {props.heroAspectPairs.map((pair) => <HeroAspectPair hero={pair.hero} aspects={pair.aspects}/>)}
        </>
    );
};

export default PlayerDisplay;