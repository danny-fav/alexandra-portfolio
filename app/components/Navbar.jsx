import React from 'react';
import styles from "./page.module.css";
const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav} style={{backdropFilter:'blur(5px)'}}>
        <div className={styles.navleft}>
            <span className={styles.navleft1}>A</span>
            <span className={styles.navleft2}>lexandra</span>
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
