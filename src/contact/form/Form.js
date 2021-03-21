import React from 'react';
import style from './Form.module.css';

function Form() {
    return (
           <form className={style.form}>
                 <input className={style.input} type = "text"  name = "firstname" value =  ""/>
                 <input className={style.input}type = "text" name = "lastname" value =  ""/>
                     <textarea className={style.textarea}>  </textarea>
            </form>
    );
}

export default Form;
