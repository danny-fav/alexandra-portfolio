import React from 'react';
import styles from "./page.module.css";

const Footer = () => {
  return (
     <div>
      <div className={styles.footer}>
        <div className={styles.footerleft}>
            <span className={styles.footerleft1}>A</span>
            <span className={styles.footerleft2}>lexandra</span>
        </div>
        <div>
          <p>© 2025 Drexxy. All rights reserved.</p>
        </div>
        <div className={styles.footerright}>
                <a href="#home">HOME</a>
                <a href="#about">ABOUT</a>
                <a href="#work">WORK</a>
                <a href="#services">SERVICES</a>
                <a href="#contact">CONTACT</a>
            </div>
      </div>
    </div>
  );
}

export default Footer;
