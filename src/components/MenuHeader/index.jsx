import React from 'react';
import ItemMenu from '../ItemMenu';
import './MenuHeader.css'
import {useTranslation} from "react-i18next"

const MenuHeader = () => {
    const {t} = useTranslation()
    return (
        <div className='menu__header'>
            <ItemMenu id="inicio">{t('Início')}</ItemMenu>
            <ItemMenu id="habilidades">{t('Habilidades')}</ItemMenu>
            <ItemMenu id="projetos">{t('Projetos')}</ItemMenu>
            <ItemMenu id="sobre">{t('Sobre')}</ItemMenu>
        </div>
    );
}
 
export default MenuHeader;