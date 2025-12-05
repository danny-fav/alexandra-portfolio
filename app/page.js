import React from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/Scroll';
import "tailwindcss";
import Gird1 from './components/Gird1';
import Gird2 from './components/Gird2';
import Gird3 from './components/Gird3';
import Gird4 from './components/Gird4';
import Gird5 from './components/Gird5';
import Gird6 from './components/Gird6';
import View from './components/View';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import styles from "./components/page.module.css";

const page = () => {
  return (
    <div>
      <Navbar/>
      <div className={styles.body}>
        <section id='home'>
          <div className={styles.home}>
            <p className={styles.p1}>CREATIVE WEB DESIGNER</p>
            <h1>Crafting <span><i>Luxury</i></span> Digital Experiences</h1>
            <p className={styles.p2}>I design timeless, elegant digital experiences for discerning brands who value craftsmanship and sophistication.</p>
            <a href="#work"><button className={styles.but1}>View My Work <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down w-4 h-4 group-hover:translate-y-1 transition-transform duration-300"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg></button></a>
            </div>
        </section>
        <section id='about'>
          <div className={styles.about}>
            <p className={styles.p3}>ABOUT</p>
            <h1>The Designer</h1>
            <div className={styles.grid1}>
              <div className={styles.g1}>
                <View/>
              </div>
              <div className={styles.g2}>
                <div className={styles.line}></div>
                <h3>Where elegance meets <br></br> <span>innovation</span> </h3><br></br>
                <div>
                  <p className={styles.p4}>With over a decade of experience in crafting digital experiences, I specialize in creating bespoke websites that reflect the unique essence of luxury brands.</p><br></br>
                  <p className={styles.p4}>My approach combines timeless design principles with cutting-edge technology, ensuring every pixel serves both form and function. Each project is a collaboration—a journey to translate your vision into a digital masterpiece.</p><br></br>
                  <p className={styles.p4}>Based in Paris, I work with discerning clients worldwide who share my passion for excellence and attention to detail.</p><br></br>
                </div>
                <div className={styles.line2}></div>
                <div className={styles.g_foot}>
                  <div>
                    <p className={styles.g_p1}>12+</p>
                    <p className={styles.g_p2}>YEARS</p>
                  </div>
                  <div>
                    <p className={styles.g_p1}>150+</p>
                    <p className={styles.g_p2}>PROJECTS</p>
                  </div>
                  <div>
                    <p className={styles.g_p1}>40+</p>
                    <p className={styles.g_p2}>BRANDS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section>
        <section id='work'>
          <div className={styles.work}>
            <p className={styles.p4}>PORTFOLIO</p>
            <h1>Selected Works</h1>
            <div className={styles.grid2}>
              <div className={styles.g3}>
                <div style={{width:'900px'}}>
                <Gird1/>
                </div>
              </div>
              <div className={styles.g3}>
                <div style={{width:'370px'}}>
                <Gird2/>
                </div>
              </div>
              <div className={styles.g3}>
                <div style={{width:'700px'}}>
                <Gird3/>
                </div>
              </div>
              <div className={styles.g3}>
                <div style={{width:'700px'}}>
                <Gird4/>
                </div>
              </div>
              <div className={styles.g3}>
                <div style={{width:'370px'}}>
                <Gird5/>
                </div>
              </div>
              <div className={styles.g3}>
                <div style={{width:'370px'}}>
                <Gird6/>
                </div>
              </div>
            </div>
            <div>
              <p className={styles.p5}>VIEW ALL PROJECTS </p>
            </div>
            </div>
        </section>
        <section id='services'>
          <div className={styles.services}>
            <p className={styles.p6}>SERVICES</p>
            <h1>What I <span>Offer</span></h1>
            <div className={styles.grid3}>
              <div className={styles.g4}>
                <div className={styles.g_1}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-panels-top-left w-12 h-12 text-gold"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
                <span>01</span>
                </div>
                <h3>Web Design</h3>
                <p>Bespoke website designs that capture your brand's essence and deliver exceptional user experiences across all devices.</p>
              </div>
              <div className={styles.g4}>
                <div className={styles.g_1}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette w-12 h-12 text-gold"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>
                <span>02</span>
                </div>
                <h3>UI/UX Design</h3>
                <p>Intuitive interfaces crafted with precision, balancing aesthetic beauty with seamless functionality.</p>
              </div>
              <div className={styles.g4}>
                <div className={styles.g_1}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-12 h-12 text-gold"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
                <span>03</span>
                </div>
                <h3>Brand Identity</h3>
                <p>Comprehensive visual identities that tell your story and establish a lasting impression in your market.</p>
              </div>
            </div>
            <div className={styles.line3}></div>
          </div>
        </section>
        <section id='contact'>
          <div className={styles.contact}>
            <p  className={styles.p7}>CONTACT</p>
            <h1>Let's Connect</h1>
            <div className={styles.grid4}>
              <div className={styles.g5}>
                <h1 className={styles.g_h1}>Start a <span>conversation </span></h1><br></br>
                <p className={styles.p8}>Whether you have a project in mind or simply want to explore possibilities, I'd love to hear from you. Every great collaboration begins with a single message.</p>
                <div className={styles.g_2}>
                  <div className={styles.d1}>
                  <div className={styles.d2}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-5 h-5 luxury-text"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
                  <div className={styles.d3}>
                    <p className={styles.d4}>LOCATION</p>
                    <p className={styles.d5}>Paris, France</p>
                  </div>
                </div>
                <div className={styles.d1}>
                  <div className={styles.d2}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-5 h-5 luxury-text"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></div>
                  <div className={styles.d3}>
                    <p className={styles.d4}>EMAIL</p>
                    <p className={styles.d5} ><a href='mailto:hello@alexandra.design'>hello@alexandra.design</a></p>
                  </div>
                </div>
                </div>
              </div>
              <div>
                <LoginForm/>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
        <ScrollToTop />
      </div>
    </div>
  );
}

export default page;
