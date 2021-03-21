import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title = {'Js'} description ={' la lalalalalala'} />
                    <Skill title = {'CSS'} description ={' ldfвипса аипсисир апаспспсап сапсапсап иgfdgfdfffff'}/>
                    <Skill title = {'React'} description ={' jjhkyiy iuykjhlkj fghfhgghthryr gfhg rthrghfhfgh rtytyrhrty kghjhgdfgfdgd gdgfdgggf ghfghddghfhfgnh gnndug hhgjh  dhghdt hsrthfghfg 6576utyu67i jg'}/>

                </div>
            </div>
        </div>
    );
}

export default Skills;
