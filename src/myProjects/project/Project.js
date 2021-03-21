import React from 'react';
import style from './Project.module.css';

function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                <a className={style.watch_Button}>Смотреть</a>
            </div>
            <div>
                <div>
                    <h3 align="left" className={style.title}>{props.title}</h3>
                </div>
                <div align="left" className={style.title}>{props.description} </div>
            </div>
        </div>
    );
}

export default Project;
