import React from 'react';
import Link from '../Link';
import './Inicio.css'
import Gato from '../../img/gato.gif'
import Italic from '../Italic';
import Bold from '../Bold';

const Inicio = () => {
    return (
        <div className='inicio'>
            <div className='inicio__apresentation'>
                <Bold fontSize="18px">Olá, eu sou</Bold>
                <h1>Marcos Matsuo</h1>
                <Italic fontSize='20px'>Desenvolvedor Front End</Italic>
                <div className="inicio__ancoras">
                    <Link link="https://www.linkedin.com/in/marcos-matsuo-b782a7264/">Linked<i class="fa-brands fa-linkedin"></i></Link>
                    <Link link="https://www.github.com/MarcMatsuo"><i class="fa-brands fa-github" ></i>Github</Link>
                </div>
            </div>
            <img className="inicio__gif" src={Gato} alt="Gato tecnológico fofo"></img>
        </div>
    );
}
 
export default Inicio;