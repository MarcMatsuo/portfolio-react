import React from 'react';
import HabilidadesConjunto from '../HabilidadesConjunto';
import './Habilidades.css'
import ImagemNome from '../ImagemNome';
import dominatedSkillsList from '../../listas/dominatedSkillList'
import knowSkillsList from '../../listas/knowSkillList';
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
        <div className='habilidades'>
            <Bold fontSize="24px">{t('Habilidades')}</Bold>
            <HabilidadesConjunto fontSize='18px' titulo={t('Possuo domínio:')}>
                {handleRenderSkills(dominatedSkillsList)}
            </HabilidadesConjunto>
            <HabilidadesConjunto fontSize='18px' titulo={t('Possuo conhecimento:')}>
                {handleRenderSkills(knowSkillsList)}
            </HabilidadesConjunto>
        </div>
    );
}
 
export default Habilidades;