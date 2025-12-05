import React from 'react';
import styles from "./page.module.css";
const Navbar = () => {
  return (
    <div>
      <nav style={{ background:' #ffffffdc',backdropFilter:'blur(5px)', gap:'650px',color: '#737373',padding:'30px', paddingLeft:'40px',paddingRight:'55px', display: 'flex',justifyItems:'center',alignItems:'center',fontFamily: 'sans-serif', position:'fixed',top:'0px',zIndex:'9999'}}>
        <div style={{float:'left'}}>
            <span style={{color:'#C4A673', fontSize:'24px'}}>A</span>
            <span style={{color:'#000', fontSize:'24px'}}>lexandra</span>
        </div>
        <div style={{display: 'flex', fontSize:'15px',position:'relative',right:'10px', float: 'right',gap: '30px'}}>
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
