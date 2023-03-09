import React from 'react';
import ItemMenu from '../ItemMenu';
import './MenuHeader.css'
import {useTranslation} from "react-i18next"

const MenuHeader = () => {
    const {t} = useTranslation()
    return (
        <div className='menu__header'>
            <ItemMenu>{t('Início')}</ItemMenu>
            <ItemMenu>{t('Habilidades')}</ItemMenu>
            <ItemMenu>{t('Projetos')}</ItemMenu>
            <ItemMenu>{t('Sobre')}</ItemMenu>
        </div>
    );
}
 
export default MenuHeader;