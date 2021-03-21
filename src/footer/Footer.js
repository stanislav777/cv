import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css';

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Милованов Станислав</h2>
                <div className={style.footer}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>

                </div>
                <h4 className={style.title}>© 2021 Все права защищены</h4>
            </div>
        </div>
    );
}

export default Footer;