import React from 'react';
import Italic from '../Italic';
import './HabilidadesConjunto.css'


const HabilidadesConjunto = (props) => {
    return (
        <div className='habilidade__conjunto'>
            <Italic fontSize={props.fontSize}>{props.titulo}</Italic>
            <ul className='lista__habilidades'>
                {props.children}
            </ul>
        </div>
    );
}
 
export default HabilidadesConjunto;