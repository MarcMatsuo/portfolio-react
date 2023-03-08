import React from 'react';
import HabilidadesConjunto from '../HabilidadesConjunto';
import './Habilidades.css'
import ImagemNome from '../ImagemNome';
import dominatedSkillsList from '../../listas/dominatedSkillList'
import knowSkillsList from '../../listas/knowSkillList';

const Habilidades = () => {
    function handleRenderSkills(lista){
        const renderSkills = []
        lista.forEach((element) => {
            renderSkills.push(<ImagemNome img={element.img}>{element.skillName}</ImagemNome>)
        })
        return renderSkills;
    }

    return (
        <div className='habilidades'>
            <h1 className='h1'>Minhas habilidades</h1>
            <HabilidadesConjunto fontSize='18px' titulo="Possuo domínio:">
                {handleRenderSkills(dominatedSkillsList)}
            </HabilidadesConjunto>
            <HabilidadesConjunto fontSize='18px' titulo="Possuo conhecimento:">
                {handleRenderSkills(knowSkillsList)}
            </HabilidadesConjunto>
        </div>
    );
}
 
export default Habilidades;