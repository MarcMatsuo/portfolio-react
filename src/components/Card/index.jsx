import React from 'react';
import ImagemNome from '../ImagemNome';
import Link from '../Link';
import './Card.css'

const Card = (props) => {
    return (
        <div className='card'>
            <ImagemNome img={props.img}>{props.nome}</ImagemNome>
            <p style={{fontStyle: 'italic'}}>{props.description}</p>
            <Link link={props.linkSite}>Ver site <i class="fa-solid fa-arrow-up-right-from-square"></i></Link>
            <Link link={props.linkGit}><i class="fa-brands fa-github" ></i> Ver código</Link>
        </div>
    );
}
 
export default Card;