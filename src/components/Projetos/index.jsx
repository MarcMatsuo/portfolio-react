import React from 'react';
import Card from '../Card';
import './Projetos.css'

import projectsList from '../../listas/projectsList'
import Link from '../Link';
import Bold from '../Bold';

import { useTranslation } from 'react-i18next';

const Projetos = () => {
    const { t } = useTranslation()

    function handleRenderProjects(lista){
        const renderProjects = []
        lista.forEach((element) => {
            renderProjects.push(
                <li>
                    <Card
                        nome={t(element.nome)}
                        description={t(element.description)}
                        img={element.img}
                        linkSite={element.linkSite}
                        linkGit={element.linkGit}> 
                    </Card>
                </li>    
            )
        })
        return renderProjects;
    }

    return (
        <div className='projetos' id='projetos'>
            <Bold fontSize="24px">{t('Projetos')}</Bold>
            <ul className="lista__projetos">
               {handleRenderProjects(projectsList)}
            </ul>
            <Bold fontSize="16px">{t('Veja mais em:')}</Bold>
            <div>
                <Link link="https://www.github.com/MarcMatsuo"><i class="fa-brands fa-github" ></i>Github</Link>
            </div>
        </div>
    );
}
 
export default Projetos;