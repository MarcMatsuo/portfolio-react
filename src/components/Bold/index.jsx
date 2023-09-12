import React from 'react';

const Bold = (props) => {
    return <h2 style={{fontWeight: 'bold', fontSize: props.fontSize}}>{props.children}</h2>;
}
 
export default Bold;