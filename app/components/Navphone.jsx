"use client";
import { useState } from "react";
import styles from "./page.module.css";
import React from 'react';

const Navphone = () => {
     const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        style={{
          fontSize: "28px",
          border: "none",
          background: "none",
          cursor: "pointer",
        }}
      >
        {open ? <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-6 h-6"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></span> : <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu w-6 h-6"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg></span>}
      </button>

      {open && (
        <div className={styles.navrigh}>
                <a href="#home" >HOME</a>
                <a href="#about" >ABOUT</a>
                <a href="#work" >WORK</a>
                <a href="#services" >SERVICES</a>
                <a href="#contact" >CONTACT</a>
            </div>
      )}
    </div>
  );
}

export default Navphone;
