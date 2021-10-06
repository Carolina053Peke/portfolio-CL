import React, { Component } from 'react'
import './Footer.css'


export default class footer extends Component{
    render(){
        return(
            <footer className="s-footer">
            <div className="row">
              <div className="column large-7 medium-6 w-1000-stack ss-copyright">
                <span>© Copyright Carolina Lemes 2021</span> 
              </div>
            </div>
            <a className="s-header__menu-toggle" href="hero" title="Menu">
              <span className="my-fixed-item" />
            </a>
          </footer>
          
        )
    }
}