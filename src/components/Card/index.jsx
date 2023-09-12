import React from 'react';
import ImagemNome from '../ImagemNome';
import Italic from '../Italic';
import Link from '../Link';
import './Card.css'
import {useTranslation} from "react-i18next"

const Card = (props) => {
    const { t } = useTranslation()
    return (
        <div className='cardProject'>
            <ImagemNome img={props.img}>{props.nome}</ImagemNome>
            <Italic fontSize="15px">{props.description}</Italic>
                <Link fontSize="16px" link={props.linkSite}>{t('Ver site')} <i class="fa-solid fa-arrow-up-right-from-square"></i></Link>
            <Link fontSize="16px" link={props.linkGit}><i class="fa-brands fa-github" ></i> {t('Ver código')}</Link>
        </div>
    );
}
 
export default Card;