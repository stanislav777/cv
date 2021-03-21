import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css';
import FooterBlock from "./block/FooterBlock";

function Footer() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Милованов Станислав</h2>
                <div className={style.projects}>
                    <FooterBlock/>
                    <FooterBlock/>
                    <FooterBlock/>
                    <FooterBlock/>
                </div>
                <h2 className={style.title}>© 2021 Все права защищены</h2>
            </div>
        </div>
    );
}

export default Footer;