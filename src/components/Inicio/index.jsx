import React from 'react';
import Link from '../Link';
import './Inicio.css'
import Gato from '../../img/gato.gif'
import Italic from '../Italic';
import Bold from '../Bold';
import curriculo from '../../pdf/curr.pdf'

import {useTranslation} from "react-i18next"

const Inicio = () => {
    const {t} = useTranslation();
    return (
        <div className='inicio' id='inicio'>
            <div className='inicio__apresentation'>
                <Bold fontSize="18px">{t('Olá, eu sou')}</Bold>
                <h1>Marcos Matsuo</h1>
                <Italic fontSize='20px'>{t("Desenvolvedor Front End")}</Italic>
                <div className="inicio__ancoras">
                    <Link link="https://www.linkedin.com/in/marcos-matsuo-b782a7264/">Linked<i class="fa-brands fa-linkedin"></i></Link>
                    <Link link="https://www.github.com/MarcMatsuo"><i class="fa-brands fa-github" ></i> Github</Link>
                    <a className='cv' href={curriculo} download="CV Marcos Matsuo"><i class="fa-solid fa-download"></i> Baixar CV</a>
                    
                </div>
            </div>
            <img className="inicio__gif" src={Gato} alt="Gato tecnológico fofo"></img>
        </div>
    );
}
 
export default Inicio;