import React from 'react';
import Bold from '../Bold';
import './About.css'
import { useTranslation } from 'react-i18next';
import eu from '../../img/eu.jpeg'

const About = () => {
    const { t } = useTranslation()

    return (
        <div className='about' id='sobre'>
            <div className='about__informations'>
                <img className='about__img' src={eu} alt="Uma foto minha ;)" />
                <p className='about__text'>
                    <Bold fontSize="24px">{t('Quem sou eu?')}</Bold>
                    Olá, sou Marcos Matsuo, um desenvolvedor front-end. 
                    Possuindo contato com a programação desde os 12 anos de idade detenho: <br /><br />
                        <ul className='about__list'>
                            <li>Formação técnica profissionalizante em desenvolvimento web.</li>
                            <li>Formação técnica profissionalizante em desenvolvimento de sistemas.</li>
                            <li>Mais de 40 certificados em cursos da internet.</li>
                            <li>Graduação em Engenharia de Software em progresso.</li>
                        </ul>
                        <br />
                    Sou proativo, comunicativo, ágil e aprendo muito rápido. Qualquer tarefa designada a mim terá total atenção até sua resolução.
                </p>
            </div>
        </div>
    );
}
 
export default About;