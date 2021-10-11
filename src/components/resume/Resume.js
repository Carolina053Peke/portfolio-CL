import './Resume.css'



const Resume = () => {
  return (  
        <section id="resume" className="s-resume target-section">
          <div className="row s-resume__section">
            <div className="column large-3 tab-12">
              <h3 className="section-header-allcaps">Career</h3>
            </div>
            <div className="column large-9 tab-12">
              <div className="resume-block">
                <div className="resume-block__header">
                  <h4 className="h3">Java</h4>
                  <p className="resume-block__header-meta">
                    <span>Professional Training in Programming</span> 
                    <span className="resume-block__header-date">
                    MARCH - DECEMBER 2016
                    </span>
                  </p>
                </div>
                <p>
                Specialization in: Software Development - Web page development with Js - MySQL Database - Agile Methodologies - Programming Techniques - Object Oriented Programming.
                </p>
                <div>
                <div>
                <h4 className="h3">Java Backend y Frontend</h4>
                <p className="resume-block__header-meta">
                    <span>Certified Python Programmer Basic Level</span> 
                    <span className="resume-block__header-date">
                      AUGUST - DECEMBER 2018
                    </span>
                  </p> 
                </div>
                <p>
                MySQL, Java JDBC, Spring as Framework, Json, NoSQL, JPA: Relations, Hibernate and Maven. The client part in Angular.
                </p>
                </div>
              </div> 
              <div className="resume-block">
                <div className="resume-block__header">
                  <h4 className="h3">Python</h4>
                  <p className="resume-block__header-meta">
                    <span>Certified Python Programmer Basic Level</span> 
                    <span className="resume-block__header-date">
                       APRIL 2021
                    </span>
                  </p>
                </div>
                <p>
                Universal computer programming concepts such as data types, containers, functions, conditions, loops, as well as Python programming language syntax, semantics, and the runtime environment.
                <br></br>
                Cisco Networking Academy Argentina
                </p>
              </div>
            </div>
          </div> 
          <br/>
          <div className="row s-resume__section">
            <div className="column large-3 tab-12">
              <h3 className="section-header-allcaps">Education</h3>
            </div>
            <div className="column large-9 tab-12">
              <div className="resume-block">
                <div className="resume-block__header">
                  <h4 className="h3">Universidad de Buenos Aires</h4>
                  <p className="resume-block__header-meta">
                    <span>Licensed at History - Faculty of Philosophy and Letters</span>
                    <br/> 
                    <span className="resume-block__header-date">
                      2013 - 90% OF THE CAREER
                    </span>
                  </p>
                </div>
                <div className="resume-block__header">
                  <h4 className="h3">Instituto de Formación Tecnológico Superior N° 11</h4>
                  <p className="resume-block__header-meta">
                    <span>Systems Analyst and Software development</span><br>
                    </br> 
                    <span className="resume-block__header-date">
                      2020 - 15% OF THE CAREER
                    </span>
                  </p>
                </div>
              </div>  
            </div>
          </div> 
          <br/>
          <div className="row s-resume__section">
            <div className="column large-3 tab-12">
              <h3 className="section-header-allcaps">Skills</h3>
            </div>
            <div className="column large-9 tab-12">
              <div className="resume-block">
                <ul className="skill-bars-fat">
                  <li>
                    <div className="progress percent90" />
                    <strong>HTML</strong>
                  </li>
                  <li>
                    <div className="progress percent90" />
                    <strong>CSS</strong>
                  </li>
                  <li>
                    <div className="progress percent90" />
                    <strong>Javascript</strong>
                  </li>
                  <li>
                    <div className="progress percent75" />
                    <strong>React</strong>
                  </li>
                  <li>
                    <div className="progress percent65" />
                    <strong>Node.js</strong>
                  </li>
                  <li>
                    <div className="progress percent60" />
                    <strong>MySQL</strong>
                  </li>
                </ul>
              </div> 
            </div>
          </div> 
        </section> 
    )
  }

export default Resume;