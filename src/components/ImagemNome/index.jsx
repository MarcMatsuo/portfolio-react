import React from 'react';
import Bold from '../Bold';
import './ImagemNome.css'

const ImagemNome = (props) => {
    return (
        <li className='habilidades__item'>
            <img src={props.img} alt="" />
            <Bold fontSize="16px">{props.children}</Bold>
        </li>
    );
}
 
export default ImagemNome;