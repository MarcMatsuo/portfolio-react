import React from 'react';
import Bold from '../Bold';
import './About.css'
import me from '../../img/eu.jpeg'
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation()

    return (
        <div className='about'>
            <Bold fontSize="24px">{t('Sobre mim')}</Bold>
            <div className='about__content'>
                <img src={me} alt="Eu" />
                <p className='about__text'>{t(`Bem vindo! Meu nome é Marcos Monção Matsuo e sou um desenvolvedor Front-end. Estou envolvido com programação desde os 12 anos de idade e mais recentemente venho estudando Front-end, no qual me interessei instantaneamente.`)}
                <br /><br /> {t(`Possuo ampla experiência em desenvolvimento web, possuindo certificado de qualificação profissional obtido durante meu ensino médio com técnico integrado. Além de ter uma quantidade considerável de prática em projetos próprios.`)}
                <br /><br /> {t(`Acredito que a constância e a disciplina são os aspectos mais importantes para evoluir e por isso sigo essa filosofia na minha vida, estudo e trabalho, para um dia atingir minha meta de me tornar Full-stack.`)}
                <br /><br /> {t(`Agradeço a sua visita e espero vê-lo novamente em breve!`)}</p>
            </div>
        </div>
    );
}
 
export default About;