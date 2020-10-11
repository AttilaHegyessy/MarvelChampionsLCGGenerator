import React from 'react';
import HeroAspectPair from './HeroAspectPair'; 

const PlayerDisplay = (props) => {
    return ( props.heroAspectPairs.length === undefined ? null : 
        <>
            {props.heroAspectPairs.map((pair, index) => 
                <>
                    <h1>Player {index+1}</h1>
                    <HeroAspectPair key={pair.hero} hero={pair.hero} aspects={pair.aspects}/>
                </>)}
        </>
    );
};

export default PlayerDisplay;