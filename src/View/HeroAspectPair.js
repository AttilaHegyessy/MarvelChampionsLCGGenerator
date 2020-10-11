import React from 'react';
import Hero from './Hero';
import Aspect from './Aspect';

const HeroAspectPair = (props) => {

    return (
        <table>
            <tr>
                <td>
                    <Hero hero={props.hero}/>
                </td>
                <td>
                    {props.aspects.map((aspect) => <Aspect key={aspect} aspect={aspect}/>)}
                </td>
            </tr>
        </table>
    );

}

export default HeroAspectPair;