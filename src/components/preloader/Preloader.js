import React, {Component } from 'react'
import './Preloader.css'

export default class preloader extends Component{
    render(){
        return(
            <header id="top" className="ss-preload">
                <div id="preloader">
                    <div id="loader" />
                </div>
            </header>
        )
    }
}