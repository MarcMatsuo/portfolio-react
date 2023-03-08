import React from 'react';
import ItemMenu from '../ItemMenu';
import './MenuHeader.css'

const MenuHeader = () => {
    return (
        <div className='menu__header'>
            <ItemMenu>Início</ItemMenu>
            <ItemMenu>Habilidades</ItemMenu>
            <ItemMenu>Projetos</ItemMenu>
            <ItemMenu>Sobre</ItemMenu>
        </div>
    );
}
 
export default MenuHeader;