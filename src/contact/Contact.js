import React from 'react';
import style from './Contact.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Form from "./form/Form";

function Contact() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Контакты</h2>
                <div className={style.projects}>
                    <Form/>
                </div>
                <h2 className={style.button}>Отправить</h2>
            </div>
        // </div>
    );
}

export default Contact;