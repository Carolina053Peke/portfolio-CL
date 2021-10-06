import React from "react";
import './About.css';



const About = () => {
  return (  
  <section className="s-about target-section">
  <div className="s-about">
    <div className="column large-3 tab-6">
      <img className="s-about__pic" src="images/avatars/user-1.jpg" alt="foto.cv"/>
    </div>
    <div className="column large-8 tab-8 s-about__content" >
      <h5 style={{color:'#F2F4F4'}}>About me</h5>
      <br />
      <p style={{color:'#ECF0F1'}}>
      I am currently a Web programming teacher in the "Aprendé Programando" project of the Ministry of Education of the City of Buenos Aires. Within the project my role is to mentor students in learning the technologies they choose to study. <br />
      <b style={{color:'#ECF0F1'}}>Currently I dictate the technologies of: </b> 
      
          <ul style={{color:'#ECF0F1',listStyle:'none', textAlign:'center', marginTop:'15px'}}>
            <li><i class="far fa-file-code"></i>   Web development level I: HTML and CSS</li>
            <li><i class="fas fa-code"></i>   Web Development level II: Introduction to the JavaScript language</li>
            <li><i class="fab fa-react"></i>   Web Development level III: Front-end React, Fetch API</li>
            <li><i class="fab fa-node"></i> Web Development level IV: Back-end Node.js and MySQL</li>
            <li><i class="fab fa-android"></i>  Application Development with Kotlin</li>
          </ul>
      </p>
      
      <div className="row s-about__content-bottom">
        <div className="column w-1000-stack">
          <h3>Contact details</h3>
          <p>
            Carolina Vanesa Lemes Quispe <br />
            <a href="tel:+1130084414">+11-3008-4414</a> <br />
            <a href="mailto:#0">carolaleme21@gmail.com</a>
          </p>
        </div>
        <div className="column w-1000-stack">
          <a href="../Carolina_Lemes_CV_2021.pdf" type="application/pdf" download="../Carolina_Lemes_CV_2021.pdf" className="btn btn--download">
            <svg xmlns="" width={25} height={25} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" /><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" /></svg>
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  )
};


export default About;