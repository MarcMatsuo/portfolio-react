import React from 'react';
import Bold from '../Bold';
import './About.css'
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation()

    return (
        <div className='about px-5 py-1' id='sobre'>
            <div className='d-flex flex-column justify-content-around px-5'>
                <p className='text-center'>
                    <Bold fontSize="24px">{t('Sobre')}</Bold>
                    Olá, sou Marcos Matsuo, engenheiro de software e especialista em desenvolvimento web. 
                    Possuindo contato com a programação desde os 12 anos de idade, possuo formação técnica profissionalizante e vários certificados,
                    atualmente cursando a faculdade de engenharia de software. <br /><br />

                    Possuo um inglês avançado, sou proativo, comunicativo, ágil e aprendo muito rápido. Qualquer tarefa designada a mim terá total
                    atenção até sua resolução.
                </p>
                <p className='text-center pt-3'>
                    <Bold fontSize="24px">Experiência profissional</Bold>
                    <ul className='d-flex flex-column'>
                        <li>-Desenvolvedor fullstack na LP10 - Dourados</li>
                        <li>-Freelancer - Desenvolvimento de portfólio para um advogado</li>
                    </ul>
                </p>
            </div>
        </div>
    );
}
 
export default About;