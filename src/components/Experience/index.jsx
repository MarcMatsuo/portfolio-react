import React, { useState } from 'react';
import './Experience.css'
import Bold from '../Bold';
import Italic from '../Italic';

const Experience = () => {
    const [EXP__SELECTOR__LIST, setEXP__SELECTOR__LIST] = useState([
        <li id='LP' className={`experience__selector__item experience__selector__item__selected`}>
            LP10
        </li>,
        <li id='FREE' className={`experience__selector__item`}>
            Freelance para advogado
        </li>
    ])

    const EXP_TEXT = [
        {
            "text": "Auxiliei do desenvolvimento de páginas WEB, participando diretamente do front-end, back-end e do design. Utilizei as tecnologias Vue e PHP.",
            "local": "LP10",
            "function": "Desenvolvedor full-stack"
        },
        {
            "text": "Desenvolvi um web portfolio para um advogado utilizando a biblioteca React.",
            "local": "Autônomo",
            "function": "Desenvolvedor front-end"
        }
    ]

    const [textDisplaying, setTextDisplaying] = useState([0])


    const handleExperienceChange = (element) => {
        let newSelectorList = []

        EXP__SELECTOR__LIST.forEach((elementOfList) => {
            if(elementOfList.props.id === element.target.id ){
                if(elementOfList.props.id === 'FREE'){
                    setTextDisplaying(1)
                }else{
                    setTextDisplaying(0)
                }
            }

            if(element.target.id === elementOfList.props.id){
                newSelectorList.push(
                    <li id={elementOfList.props.id} className={`experience__selector__item experience__selector__item__selected`}>
                        {elementOfList.props.children}
                    </li>
                )
            }else{
                newSelectorList.push(
                    <li id={elementOfList.props.id} className={`experience__selector__item`}>
                        {elementOfList.props.children}
                    </li>
                )
            }
        })

        setEXP__SELECTOR__LIST(newSelectorList)
    }

    return (
        <div className='experience'>
            <Bold fontSize="18px">Experiências</Bold>
            <div className='experience__main'>
                <div onClick={handleExperienceChange} className="experience__selector">
                    <ul className='experience__selector__list'>
                        {EXP__SELECTOR__LIST}
                    </ul>
                </div>
                <div className="experience__information">
                    <Bold fontSize="24px">{EXP_TEXT[textDisplaying].function}</Bold>
                    <Italic fontSize="20px">{EXP_TEXT[textDisplaying].local}</Italic>
                    <p className='experience__information__text'>{EXP_TEXT[textDisplaying].text}</p>
                </div>
            </div>
        </div>
    );
}
 
export default Experience;