import React from 'react';
import './ItemMenu.css'

const ItemMenu = (props) => {
    return (
        <>
            <a href="#">{props.children}</a>
        </>
    );
}
 
export default ItemMenu;