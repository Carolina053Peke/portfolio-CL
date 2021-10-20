import React from "react";
import CV from './Carolina_Lemes.pdf'
import './About.css';



const About = () => {
  return (  
  <section id="about" className="s-about target-section">
  <div className="s-about column">
    <div className="column large-3 tab-10">
      <img className="s-about__pic" src="images/avatars/user-1.jpg" alt="foto.cv"/>
      <div className="row s-about__content-bottom"  >
            <div className="column w-1000-stack">
              <a href={CV} type="application/pdf" download="./Carolina_Lemes.pdf" className="btn btn--download">
                <svg xmlns="" width={25} height={25} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" /><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" /></svg>
                DOWNLOAD CV
              </a>
            </div>
      </div>
    </div>
    <br/>
    <div className="column large-9 tab-12 s-about__content" >
    <br />
      <h5 style={{color:'#F2F4F4'}}>About me</h5>
      <br />
      <p style={{color:'#ECF0F1'}}>
      I am currently a Web programming teacher in the "Aprendé Programando" project of the Ministry of Education of the City of Buenos Aires. Within the project my role is to mentor students in learning the technologies they choose to study. <br />
      <br />
      <b style={{color:'#ECF0F1'}}>Currently I dictate the technologies of: </b> 
      <br />
          <ul className="about-block" style={{color:'#ECF0F1',listStyle:'none', textAlign:'center', marginTop:'20px'}}>
            <li><i class="far fa-file-code"></i>   Web development level I: HTML and CSS</li>
            <li><i class="fas fa-code"></i>   Web Development level II: Introduction to the JavaScript language</li>
            <li><i class="fab fa-react"></i>   Web Development level III: Front-end React, Fetch API</li>
            <li><i class="fab fa-node"></i> Web Development level IV: Back-end Node.js and MySQL</li>
            <li><i class="fab fa-android"></i>  Application Development with Kotlin</li>
          </ul>
      </p>
    </div>
    {/* <div className="row s-about__scroll">
                <a href="#resume" className="s-about__scroll-link smoothscroll">
                <span className="scroll-arrow">
                    <svg xmlns="#" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: 'rotate(180deg)', msFilter: ''}}><path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z" /></svg>
                </span>
                <span className="scroll-text">Scroll Down</span>
                </a>
            </div> */}
  </div>

</section>

  )
};


export default About;