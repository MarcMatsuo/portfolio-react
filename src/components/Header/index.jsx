import React from 'react';
import MenuHeader from '../MenuHeader';
import './Header.css'
import LanguageMenu from '../LanguageMenu/LanguageMenu';

const Header = () => {
    return (
        <header className='header'>
            <h1 className="header__title">Matsuo <i className="fa-brands fa-js" style={{color: '#e8c012'}}></i></h1>
            <MenuHeader />
            <LanguageMenu />
        </header>
    );
}
 
export default Header;