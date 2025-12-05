"use client";
import { useState } from "react";
import styles from "./page.module.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !message) {
      setMsg("Please fill all fields");
    } else {
      setMsg("Successfully sent");
    }
  };

  return (
    <div style={{color:'black',width:'530px'}}>
    <form onSubmit={handleSubmit}>
      <label>Name</label><br></br><br></br>
      <input style={{borderBottom:'1px solid #737373', color:'#737373',width:'530px'}} value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" /><br></br><br></br>
      <label>Email</label><br></br><br></br>
      <input style={{borderBottom:'1px solid #737373', color:'#737373',width:'530px'}} value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" type="email" /><br></br><br></br>
      <label>Message</label><br></br><br></br>
      <textarea style={{fontSize:'16px', color:'#737373',borderBottom:'1px solid #737373',width:'530px', height:"130px"}} value={message} onChange={e => setMessage(e.target.value)} placeholder="Tell me about your project..."></textarea>
      <br /><br></br>
      <button className={styles.but2} style={{width:'200px', display:'flex', alignItems:'center',gap:'10px', background:'linear-gradient(90deg, #C4A673 70%, #d6c6aaff 100%)',fontSize:'16px', padding:'10px 20px'}} type="submit"><p>SEND MESSAGE </p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-send w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg></button>
      <br></br>
      <p>{msg}</p>
    </form>
    </div>
  );
}
export default LoginForm;
