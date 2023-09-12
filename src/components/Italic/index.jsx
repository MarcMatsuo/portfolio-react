import React from 'react';

const Italic = (props) => {
    return <p style={{
        fontStyle: 'italic',
        fontSize: props.fontSize}}
        >{props.children}</p>;
}
 
export default Italic;