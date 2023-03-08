import React from 'react';
import ImagemNome from '../ImagemNome';
import Italic from '../Italic';
import Link from '../Link';
import './Card.css'

const Card = (props) => {
    return (
        <div className='card'>
            <ImagemNome img={props.img}>{props.nome}</ImagemNome>
            <Italic fontSize="15px">{props.description}</Italic>
            <Link fontSize="16px" link={props.linkSite}>Ver site <i class="fa-solid fa-arrow-up-right-from-square"></i></Link>
            <Link fontSize="16px" link={props.linkGit}><i class="fa-brands fa-github" ></i> Ver código</Link>
        </div>
    );
}
 
export default Card;