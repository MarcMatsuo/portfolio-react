import React from 'react';
import HabilidadesConjunto from '../HabilidadesConjunto';
import './Habilidades.css'
import ImagemNome from '../ImagemNome';
import dominatedSkillsList from '../../listas/dominatedSkillList'
import Bold from '../Bold';
import {useTranslation} from "react-i18next"

const Habilidades = () => {
    function handleRenderSkills(lista){
        const renderSkills = []
        lista.forEach((element) => {
            renderSkills.push(<ImagemNome img={element.img}>{element.skillName}</ImagemNome>)
        })
        return renderSkills;
    }

    const {t} = useTranslation()

    return (
        <div className='habilidades' id='habilidades'>
            <Bold fontSize="18px">{t('Conhecimentos')}</Bold>
            <HabilidadesConjunto fontSize='18px'>
                {handleRenderSkills(dominatedSkillsList)}
            </HabilidadesConjunto>
        </div>
    );
}
 
export default Habilidades;