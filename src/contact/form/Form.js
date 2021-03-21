import React from 'react';
import style from './Form.module.css';

function Form() {
    return (
        <div className={style.project}>
            <form className={style.form}>
                 <input className={style.input} type = "text"  name = "firstname" value =  ""/>
                 <input className={style.input}type = "text" name = "lastname" value =  ""/>
                     <textarea className={style.textarea}> и </textarea>
            </form>

        </div>
    );
}

export default Form;
