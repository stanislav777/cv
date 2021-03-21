import React from 'react';
import style from './Skill.module.css';

function Skill(props) {
    return (
        <div className={style.skill}>
     <div className={style.icon}></div>
            <h3>{props.title}</h3>
           <div>{props.description} </div>
        </div>
    );
}

export default Skill;
