import React from 'react';
import HeroAspectPair from './HeroAspectPair'; 

const PlayerDisplay = (props) => {
    return (
        <>
            {props.heroAspectPairs.map((pair) => <HeroAspectPair key={pair.hero} hero={pair.hero} aspects={pair.aspects}/>)}
        </>
    );
};

export default PlayerDisplay;