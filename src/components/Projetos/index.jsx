import React from 'react';
import Card from '../Card';
import microfone from '../../img/microfone.png'
import aluraLogo from '../../img/alurabook.svg'
import rickandmorty from '../../img/rickandmorty.png'
import './Projetos.css'

const Projetos = () => {
    return (
        <div className='projetos'>
            <h2>Projetos</h2>
            <ul className="lista__projetos">
                <li><Card img={microfone} nome="Numero Secreto" 
                    description={'Site com interface simples conectado a API de reconhecimento de voz Web Speech API.'}
                    linkGit="https://github.com/MarcMatsuo/jogo-numero-secreto"
                    linkSite="https://jogo-numero-secreto-marcmatsuo.vercel.app" /></li>
                <li><Card img={aluraLogo} nome="Alura Books" description={'Site com interface simples conectado a API de reconhecimento de voz Web Speech API.'} /></li>
                <li><Card img={rickandmorty} nome="Rick and Morty characters" description={'Site com interface simples conectado a API de reconhecimento de voz Web Speech API.'} /></li>
                <li><Card img={microfone} nome="Numero Secreto" description={'Site com interface simples conectado a API de reconhecimento de voz Web Speech API.'} /></li>
            </ul>
        </div>
    );
}
 
export default Projetos;