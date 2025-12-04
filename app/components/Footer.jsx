import React from 'react';

const Footer = () => {
  return (
     <div>
      <nav className='you' style={{ background:' #000',backdropFilter:'blur(5px)', gap:'200px',color: '#fff',padding:'30px', paddingLeft:'40px', display: 'flex',justifyItems:'center',alignItems:'center',fontFamily: 'sans-serif', position:'sticky',bottom:'0px',zIndex:'999'}}>
        <div style={{float:'left'}}>
            <span style={{color:'#C4A673', fontSize:'24px'}}>A</span>
            <span style={{color:'#fff', fontSize:'24px'}}>lexandra</span>
        </div>
        <div>
          <p style={{ fontSize:'15px'}}>© 2025 Drexxy. All rights reserved.</p>
        </div>
        <div style={{display: 'flex', fontSize:'15px',position:'relative',right:'10px', float: 'right',gap: '30px'}}>
                <a href="#home">HOME</a>
                <a href="#about">ABOUT</a>
                <a href="#work">WORK</a>
                <a href="#services">SERVICES</a>
                <a href="#contact">CONTACT</a>
            </div>
      </nav>
    </div>
  );
}

export default Footer;
