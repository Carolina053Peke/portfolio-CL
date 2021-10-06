import React, { Component } from 'react'
import './Portfolio.css'



export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio" className="s-portfolio target-section">
  <div className="row s-portfolio__header">
    <div className="column large-12">
      <h3>Some of my first creations</h3>
    </div>
  </div>
  <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
    <div className="column folio-item">
      <a href="https://carolina053peke.github.io/random.user-fetch/" className="folio-item__thumb">
        <h6 className="titulo-proyectos">UI-UX con Fetch API</h6>
        <img src="images/portfolio/droplet.jpeg" srcSet="images/portfolio/rucksack.jpg 1x, 
        images/portfolio/rucksack@2x.jpg 2x" alt="cv" />
      </a>
    </div> 
    <div className="column folio-item">
      <a href="https://carolina053peke.github.io/to_do_list/" className="folio-item__thumb">
        <img src="images/portfolio/minimalismo.jpg" srcSet="images/portfolio/fuji.jpg 1x, 
                           images/portfolio/rucksack@2x.jpg 2x" alt="todolist" />
        <h6 className="titulo-proyectos">To do list</h6>              
      </a>
    </div>
    <div className="column folio-item">
      <a href="https://carolina053peke.github.io/proyecto-calculadora-jQuery/" className="folio-item__thumb">
      <h6 className="titulo-proyectos">Calculadora en Jquery</h6>
        <img src="images/portfolio/rucksack.jpg" srcSet="images/portfolio/lamp.jpg 1x, 
                           images/portfolio/rucksack@2x.jpg 2x" alt="calcyladora" />
      </a>
    </div>
    <div className="column folio-item">
      <a href="https://carolina053peke.github.io/fetch-poke-API/" className="folio-item__thumb">
        <img src="images/portfolio/sanddunes.jpg" srcSet="images/portfolio/sanddunes.jpg 1x, 
                           images/portfolio/sanddunes@2x.jpg 2x" alt="boletin" />
        <h6 className="titulo-proyectos">Poke-API/Fetch</h6>
      </a>
    </div>
  </div> 
</section>
 
    )
  }
}