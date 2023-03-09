import React from 'react';
import './ItemMenu.css'

const ItemMenu = (props) => {
    const roll = props.id === 'projetos' ? 'start' : 'center';

    const handleItemClick = (e) => {
        e.preventDefault()

        document.getElementById(`${props.id}`).scrollIntoView(
            {behavior: 'smooth', block: `${roll}`})
    }

    return (
        <>
            <a className='link__menu' href="#" onClick={handleItemClick}>{props.children}</a>
        </>
    );
}
 
export default ItemMenu;