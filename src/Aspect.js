import React from 'react';
import { DisplayElement } from './DisplayElement';

const Aspect = (props) => {

    return (
        <>
            {<DisplayElement name={props.aspect}/>}
        </>
    );
}

export default Aspect;