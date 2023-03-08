import React from 'react';
import HabilidadesConjunto from '../HabilidadesConjunto';
import './Habilidades.css'
import html from '../../img/html.png'
import css from '../../img/css.webp'
import js from '../../img/javascript1.png'
import reactLogo from '../../img/react.png'
import git from '../../img/git.png'
import ImagemNome from '../ImagemNome';



const Habilidades = () => {
    return (
        <div className='habilidades'>
            <h1 className='h1'>Minhas habilidades</h1>
            <HabilidadesConjunto fontSize='18px' titulo="Possuo domínio:">
                <ImagemNome img={html}>HTML5</ImagemNome>
                <ImagemNome img={css}>CSS3</ImagemNome>
                <ImagemNome img={js}>Javascript</ImagemNome>
                <ImagemNome img={reactLogo}>React</ImagemNome>
            </HabilidadesConjunto>
            <HabilidadesConjunto fontSize='18px' titulo="Possuo conhecimento:">
                <ImagemNome img={git}>Git</ImagemNome>
            </HabilidadesConjunto>
        </div>
    );
}
 
export default Habilidades;