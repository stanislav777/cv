import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Project from "./project/Project";

function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                    <Project title = {'Js'} description ={' la lalalalalala'} />
                    <Project title = {'CSS'} description ={' ldfвипса аипсисир апаспспсап сапсапсап иgfdgfdfffff'}/>

                </div>
            </div>
        </div>
    );
}

export default Projects;
