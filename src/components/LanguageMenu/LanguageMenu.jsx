import React, { useState } from 'react';
import "./LanguageMenu.css"
import "../../i18n/index"

const LanguageMenu = () => {
    const [active, setActive] = useState('none')

    const handleActive = () => {
        let s = active === 'none' ? 'flex' : 'none'
        setActive(s)

        console.log(active)
    }
    
    const handleChangeLanguage = (lgnn) => {
        localStorage.setItem('lgn', `${lgnn}`)
        document.location.reload()
    }

    return (
        <div className='language'>
            <i onClick={handleActive}><i class="fa-solid fa-globe"></i> <i class="fa-solid fa-caret-down"></i></i>
            <ul style={{display: `${active}`}} className="language__list">
                <li onClick={() => handleChangeLanguage('pt-BR')}>Português-BR</li>
                <li onClick={() => handleChangeLanguage('en-US')}>English-US</li>
            </ul>
        </div>
    );
}
 
export default LanguageMenu;