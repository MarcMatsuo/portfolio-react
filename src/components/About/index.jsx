import React from 'react';
import Bold from '../Bold';
import Habilidades from '../Habilidades'
import './About.css'
import { useTranslation } from 'react-i18next';
import eu from '../../img/eu.jpeg'
import Experience from '../Experience';

const About = () => {
    const { t } = useTranslation()

    return (
        <div className='about' id='sobre'>
            <div className='about__card'>
                <div className='about__informations'>
                    <img className='about__img' src={eu} alt="Uma foto minha ;)" />
                    <p className='about__text'>
                        <Bold fontSize="24px">{t('Quem sou eu?')}</Bold>
                        Olá, sou Marcos Matsuo, um desenvolvedor front-end. Possuo <em className='destacar__texto'>contato com a programação desde os 12 anos de idade</em>, onde reuni
                        muita experiência.
                        <br /><br />
                        Possuo técnico <em className="destacar__texto">profissionalizante em desenvolvimento</em> e atualmente faço graduação em <em className="destacar__texto">Engenharia de Software</em>.
                        <br /><br />
                        Sou proativo, comunicativo, ágil e aprendo muito rápido. Qualquer tarefa designada a mim terá <em className="destacar__texto">total atenção até sua resolução</em>.
                    </p>
                </div>
                <Habilidades />
                <Experience />
            </div>
        </div>
    );
}
 
export default About;