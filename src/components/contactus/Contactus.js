import React, { Component } from 'react'
import './Contactus.css'


export default class contactus extends Component{
    render(){
        return(
            <section id="contact" className="s-contact target-section">
            <div className="row s-contact__header">
              <div className="column large-10">
                <h3 className="section-header-allcaps">Hello</h3>
              </div>
            </div>
            <div className="row s-contact__content">
              <div className="column large-8 medium-10">
                <h4 className="huge-text">
                Have a new project in mind? Let's collaborate and build something awesome. Let's turn that idea to an even greater product :)
                </h4>
              </div>
              <div className="column large-4 medium-12">
                <div className="row contact-infos">
                  <div className="column large-14 medium-10 tab-12">
                    <div className="contact-block">
                      <h5 className="contact-block__header">
                        Email
                      </h5>
                      <p className="contact-block__content">
                        <a className="mailtoui" href="mailto:sayhello@ceevee.com">carolaleme21@gmail.com</a>
                      </p>
                    </div> 
                  </div>
                  <div className="column large-10 medium-6 tab-12">
                    <div className="contact-block">
                      <h5 className="contact-block__header">
                        Phone
                      </h5>
                      <p className="contact-block__content">
                        <a href="tel:+1975432345">+(54) 11-3008-4414</a>
                      </p>
                    </div> 
                  </div>
                  <div className="column large-12">
                    <a href="mailto:carolaleme21@gmail.com" className="mailtoui btn btn--primary h-full-width">Contact</a>
                  </div>
                </div> 
              </div>
            </div> 
          </section>
          
        )
    }
}