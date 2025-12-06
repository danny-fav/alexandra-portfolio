"use client";
import React from 'react';
import styles from "./page.module.css";
import Navphone from './Navphone';
const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.navleft}>
            <span className={styles.navleft1}>A</span>
            <span className={styles.navleft2}>lexandra</span>
            <span className={styles.navleft3}><Navphone/></span>
        </div>
        <div className={styles.navright}>
                <a href="#home" className={styles.navLink}>HOME</a>
                <a href="#about" className={styles.navLink}>ABOUT</a>
                <a href="#work" className={styles.navLink}>WORK</a>
                <a href="#services" className={styles.navLink}>SERVICES</a>
                <a href="#contact" className={styles.navLink}>CONTACT</a>
                
            </div>
      </nav>
    </div>
  );
}

export default Navbar;
