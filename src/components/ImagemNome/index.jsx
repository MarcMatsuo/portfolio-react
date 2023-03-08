import React from 'react';
import './ImagemNome.css'

const ImagemNome = (props) => {
    return (
        <li className='habilidades__item'>
            <img src={props.img} alt="" />
            <span>{props.children}</span>
        </li>
    );
}
 
export default ImagemNome;