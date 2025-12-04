import React from 'react';
const Navbar = () => {
  return (
    <div>
      <nav className='you' style={{ background:' #ffffffdc',backdropFilter:'blur(5px)', gap:'650px',color: '#737373',padding:'30px', paddingLeft:'40px',paddingRight:'55px', display: 'flex',justifyItems:'center',alignItems:'center',fontFamily: 'sans-serif', position:'fixed',top:'0px',zIndex:'9999'}}>
        <div style={{float:'left'}}>
            <span style={{color:'#C4A673', fontSize:'24px'}}>A</span>
            <span style={{color:'#000', fontSize:'24px'}}>lexandra</span>
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

export default Navbar;
