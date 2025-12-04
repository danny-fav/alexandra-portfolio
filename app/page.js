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
const page = () => {
  return (
    <div><Navbar/>
      <body style={{background:'white',marginTop:'150px'}}>
        <section id='home'>
          <div style={{justifyItems: 'center', alignItems: 'center',textAlign: 'center', position: 'relative', margin: 'auto'}}>
            <p style={{color:'#C4A673', fontSize:'18px', marginTop:'30px'}}>CREATIVE WEB DESIGNER</p>
            <h1 style={{color:'#000000ff', fontSize:'100px', marginTop:'40px', fontFamily:'ui-sans-serif', width:'900px', fontWeight:'500', lineHeight:'100px'}}>Crafting <span style={{color:'#C4A673'}}><i>Luxury</i></span> Digital Experiences</h1>
            <p style={{color:'#737373', width:'600px', fontSize:'18px', marginTop:'30px'}}>I design timeless, elegant digital experiences for discerning brands who value craftsmanship and sophistication.</p>
            <a href="#work"><button style={{marginTop:'40px', marginBottom:'100px',background:'#000', padding:'15px 40px',alignItems: 'center',width:'240px'}}>View My Work <svg style={{float:'right'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down w-4 h-4 group-hover:translate-y-1 transition-transform duration-300"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg></button></a>
            </div>
        </section>
        <section id='about'>
          <div style={{background:'#FAF8F5',paddingBottom:'100px'}}>
            <p style={{color:'#C4A673', fontSize:'18px', paddingTop:'100px', textAlign:'center'}}>ABOUT</p>
            <h1 style={{color:'#000000ff', fontSize:'60px', marginTop:'10px', textAlign:'center', fontFamily:'ui-sans-serif', fontWeight:'500',marginBottom:'50px'}}>The Designer</h1>
            <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', margin:'auto', width:'1100px',gap:'100px',justifyContent:'center',justifyItems:'center'}}>
              <div style={{height:'660px', width:'550px'}}>
                <View/>
              </div>
              <div>
                <div style={{background:'#C4A673', height:'2px', width:'100px',borderRadius:'50%',marginTop:'50px',marginBottom:'50px'}}></div>
                <h3 style={{color:'#000', fontSize:'34px',fontFamily:'sans-serif'}}>Where elegance meets <br></br> <span style={{color:'#C4A673',fontFamily:'ui-sans-serif'}}>innovation</span> </h3><br></br>
                <div>
                  <p style={{color:'#737373',width:'500px'}}>With over a decade of experience in crafting digital experiences, I specialize in creating bespoke websites that reflect the unique essence of luxury brands.</p><br></br>
                  <p style={{color:'#737373',width:'500px'}}>My approach combines timeless design principles with cutting-edge technology, ensuring every pixel serves both form and function. Each project is a collaboration—a journey to translate your vision into a digital masterpiece.</p><br></br>
                  <p style={{color:'#737373',width:'500px'}}>Based in Paris, I work with discerning clients worldwide who share my passion for excellence and attention to detail.</p><br></br>
                </div>
                <div style={{background:'#737373',width:'500px',height:'1px',marginTop:'50px',marginBottom:'50px'}}></div>
                <div style={{display: 'flex',textAlign: 'center',alignItems: 'center',justifyItems: 'center',gap: '100px',justifyContent: 'center'}}>
                  <div>
                    <p style={{color:'#C4A673', fontSize:'36px'}}>12+</p>
                    <p style={{color:'#737373', fontSize:'14px'}}>YEARS</p>
                  </div>
                  <div>
                    <p style={{color:'#C4A673', fontSize:'36px'}}>150+</p>
                    <p style={{color:'#737373', fontSize:'14px'}}>PROJECTS</p>
                  </div>
                  <div>
                    <p style={{color:'#C4A673', fontSize:'36px'}}>40+</p>
                    <p style={{color:'#737373', fontSize:'14px'}}>BRANDS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section>
        <section id='work'>
          <div style={{background:'#fff',paddingBottom:'100px'}}>
            <p style={{color:'#C4A673', fontSize:'18px', paddingTop:'100px', textAlign:'center'}}>PORTFOLIO</p>
            <h1 style={{color:'#000000ff', fontSize:'60px', marginTop:'10px', textAlign:'center', fontFamily:'ui-sans-serif', fontWeight:'500',marginBottom:'50px'}}>Selected Works</h1>
            <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', margin:'auto', width:'900px',gap:'50px',justifyContent:'center',justifyItems:'center'}}>
              <div style={{height:'460px', width:'370px',overflow:'hidden'}} >
                <div style={{width:'900px'}}>
                <Gird1/>
                </div>
              </div>
              <div style={{height:'460px', width:'370px',overflow:'hidden'}} >
                <div style={{width:'370px'}}>
                <Gird2/>
                </div>
              </div>
              <div style={{height:'460px', width:'370px',overflow:'hidden'}} >
                <div style={{width:'700px'}}>
                <Gird3/>
                </div>
              </div>
              <div style={{height:'460px', width:'370px',overflow:'hidden'}} >
                <div style={{width:'700px'}}>
                <Gird4/>
                </div>
              </div>
              <div style={{height:'460px', width:'370px',overflow:'hidden'}} >
                <div style={{width:'370px'}}>
                <Gird5/>
                </div>
              </div>
              <div style={{height:'460px', width:'370px',overflow:'hidden'}} >
                <div style={{width:'370px'}}>
                <Gird6/>
                </div>
              </div>
            </div>
            <div >
              <p style={{marginTop:'40px',alignItems: 'center',color:'#737373', fontSize:'16px', paddingTop:'100px', textAlign:'center'}}>VIEW ALL PROJECTS </p>
            </div>
            </div>
        </section>
        <section id='services'>
          <div style={{background:'#262626',paddingBottom:'100px'}}>
            <p style={{color:'#C4A673', fontSize:'18px', paddingTop:'100px', textAlign:'center'}}>SERVICES</p>
            <h1 style={{color:'#fff', fontSize:'60px', marginTop:'10px', textAlign:'center', fontFamily:'ui-sans-serif', fontWeight:'500',marginBottom:'50px'}}>What I <span style={{color:'#C4A673'}}>Offer</span></h1>
            <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)',margin:'auto', width:'1100px',gap:'100px',justifyContent:'center',justifyItems:'center'}}>
              <div style={{background: 'transparent',border:'1px solid #737373',padding: '30px',width: '320px', height: '300px',textAlign: 'left',margin:'auto'}}>
                <div style={{marginBottom:'20px', display:'flex',position:'relative'}}>
                <svg style={{stroke:'#C4A673',float:'left'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-panels-top-left w-12 h-12 text-gold"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
                <span style={{color:'#737373', position:'absolute',right:'0px',fontSize:'34px',fontFamily:'ui-serif'}}>01</span>
                </div>
                <h3 style={{fontFamily:'sans-serif',fontSize: '23px'}}>Web Design</h3>
                <p style={{width: '250px', color:'#FFFFFFB2'}}>Bespoke website designs that capture your brand's essence and deliver exceptional user experiences across all devices.</p>
              </div>
              <div style={{background: 'transparent',border:'1px solid #737373',padding: '30px',width: '320px', height: '300px',textAlign: 'left',margin:'auto'}}>
                <div style={{marginBottom:'20px', display:'flex',position:'relative'}}>
                <svg style={{stroke:'#C4A673',float:'left'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette w-12 h-12 text-gold"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>
                <span style={{color:'#737373', position:'absolute',right:'0px',fontSize:'34px',fontFamily:'ui-serif'}}>02</span>
                </div>
                <h3 style={{fontFamily:'sans-serif',fontSize: '23px'}}>UI/UX Design</h3>
                <p style={{width: '250px', color:'#FFFFFFB2'}}>Intuitive interfaces crafted with precision, balancing aesthetic beauty with seamless functionality.</p>
              </div>
              <div style={{background: 'transparent',border:'1px solid #737373',padding: '30px',width: '320px', height: '300px',textAlign: 'left',margin:'auto'}}>
                <div style={{marginBottom:'20px', display:'flex',position:'relative'}}>
                <svg style={{stroke:'#C4A673',float:'left'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-12 h-12 text-gold"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
                <span style={{color:'#737373', position:'absolute',right:'0px',fontSize:'34px',fontFamily:'ui-serif'}}>03</span>
                </div>
                <h3 style={{fontFamily:'sans-serif',fontSize: '23px'}}>Brand Identity</h3>
                <p style={{width: '250px', color:'#FFFFFFB2'}}>Comprehensive visual identities that tell your story and establish a lasting impression in your market.</p>
              </div>
            </div>
            <div style={{margin:'auto',background:'#C4A673', height:'2px', width:'300px',borderRadius:'100%',marginTop:'50px',marginBottom:'50px'}}></div>
          </div>
        </section>
        <section id='contact'>
          <div style={{background:'#FAF8F5',paddingBottom:'100px'}}>
            <p style={{color:'#C4A673', fontSize:'18px', paddingTop:'100px', textAlign:'center'}}>CONTACT</p>
            <h1 style={{color:'#000', fontSize:'60px', marginTop:'10px', textAlign:'center', fontFamily:'ui-serif', fontWeight:'500',marginBottom:'50px'}}>Let's Connect</h1>
            <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', margin:'auto',width:'1000px', gap:'50px',justifyContent:'center',justifyItems:'center'}}>
              <div style={{width:'450px'}}>
                <h1 style={{color:'#000', fontSize:'30px', marginTop:'10px',  fontFamily:'ui-sans-serif', fontWeight:'500'}}>Start a <span style={{color:'#C4A673'}}>conversation </span></h1><br></br>
                <p style={{color:'#737373', fontSize:'16px'}}>Whether you have a project in mind or simply want to explore possibilities, I'd love to hear from you. Every great collaboration begins with a single message.</p>
                <div style={{display:'flex', flexDirection:'column', gap:'20px', paddingTop:'20px'}}>
                  <div style={{display:'grid', gridTemplateColumns:'repeat(2, .5fr)',gap:'10px', width:'140px'}}>
                  <div style={{padding:'10px',border:'1px solid #C4A673', width:'44px'}}><svg style={{stroke:'#C4A673'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-5 h-5 luxury-text"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
                  <div style={{width:'96px'}}>
                    <p style={{color:'#737373', fontSize:'16px'}}>LOCATION</p>
                    <p style={{color:'#000', fontSize:'16px'}}>Paris, France</p>
                  </div>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'repeat(2, .5fr)',gap:'10px', width:'140px'}}>
                  <div style={{padding:'10px',border:'1px solid #C4A673', width:'44px'}}><svg style={{stroke:'#C4A673'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-5 h-5 luxury-text"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
                  <div style={{width:'96px'}}>
                    <p style={{color:'#737373', fontSize:'16px'}}>LOCATION</p>
                    <p style={{color:'#000', fontSize:'16px'}}>Paris, France</p>
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
      </body>
    </div>
  );
}

export default page;
