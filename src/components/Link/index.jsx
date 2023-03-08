import React from 'react';
import './Link.css'

const Link = (props) => {
    return (
        <a style={{fontSize: props.fontSize}} className='inicio__link' href={props.link} target="_blank" rel='noopener noreferrer'>{props.children}</a>
    );
}
 
export default Link;