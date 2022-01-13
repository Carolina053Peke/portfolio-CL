import './Portfolio.css'


const Portfolio = () => {
  return (  
    <section id="portfolio" className="s-portfolio target-section">
    <div className="row s-portfolio__header">
      <div className="column large-12">
        <h3>Some of my first creations</h3>
      </div>
    </div>
    <br/>
    <div className="row block-large-1-3 block-medium-1-1 block-tab-1-1 block-600-stack folio-list">
      <div className="column folio-item">
        <a href="https://carolina053peke.github.io/random.user-fetch/" className="folio-item__thumb">
          <h6 className="titulo-proyectos"> UI-UX Fetch API</h6>
          <img src="images/portfolio/rucksack.jpeg" srcSet="images/portfolio/rucksack.jpg 1x, 
                             images/portfolio/rucksack@2x.jpg 2x" alt="cv" />
        </a>
        <br/>
      </div> 

      <div className="column folio-item">
        <a href="https://carolina053peke.github.io/tienda_de_Estampados/" className="folio-item__thumb">
        <h6 className="titulo-proyectos">Wild Fashion</h6>  
          <img src="images/portfolio/fuji.jpg" srcSet="images/portfolio/fuji.jpg 1x, 
                             images/portfolio/rucksack@2x.jpg 2x" alt="todolist" />
                     
        </a>
        <br/>
      </div>
      
      <div className="column folio-item">
        <a href="https://carolina053peke.github.io/proyecto-calculadora-jQuery/" className="folio-item__thumb">
        <h6 className="titulo-proyectos">Calculadora en Jquery</h6>
          <img src="images/portfolio/lamp.jpg" srcSet="images/portfolio/lamp.jpg 1x, 
                             images/portfolio/rucksack@2x.jpg 2x" alt="calcyladora" />
        </a>
        <br/>
      </div>
      <div className="column folio-item">
        <a href="https://carolina053peke.github.io/fetch-poke-API/" className="folio-item__thumb">
          <img src="images/portfolio/sanddunes.jpg" srcSet="images/portfolio/sanddunes.jpg 1x, 
                             images/portfolio/sanddunes@2x.jpg 2x" alt="poke-api" />
          <h6 className="titulo-proyectos">Poke-API/Fetch</h6>
        </a>
        <br/>
      </div>
      <br/>
      <div className="column folio-item">
        <a href="https://carolina053peke.github.io/ChatBots-en-JavaScript/" className="folio-item__thumb">
          <img src="images/portfolio/fuji5.jpg" srcSet="images/portfolio/fuji5.jpg 1x, 
                             images/portfolio/sanddunes@2x.jpg 2x" alt="ChatBots" />
        <h6 className="titulo-proyectos">ChatBots-en-JavaScript</h6>
        </a>
        <br/>
      </div>
      <br/>
      <div className="column folio-item">
        <a href="https://carolina053peke.github.io/Notas_promedio_estudiantes/" className="folio-item__thumb">
        
          <img src="images/portfolio/fuji9.jpg" srcSet="images/portfolio/fuji9.jpg 1x, 
                             images/portfolio/sanddunes@2x.jpg 2x" alt="ChatBots" />
          <h6 className="titulo-proyectos">Notas-promedio</h6>
        </a>
        <br/>
      </div>
      <br/>
      {/* <div className="column folio-item">
        <a href="https://carolina053peke.github.io/Notas_promedio_estudiantes/" className="folio-item__thumb">
          <img src="images/portfolio/sanddunes.jpg" srcSet="images/portfolio/fuji9.jpg 1x, 
                             images/portfolio/sanddunes@2x.jpg 2x" alt="ChatBots" />
        <h6 className="titulo-proyectos">Ecommerce-MyC</h6>
        </a>
        <br/>
      </div>
      <br/>
      <div className="column folio-item">
        <a href="https://carolina053peke.github.io/Notas_promedio_estudiantes/" className="folio-item__thumb">
        <h6 className="titulo-proyectos">Ecommerce-MyC</h6>
          <img src="images/portfolio/sanddunes.jpg" srcSet="images/portfolio/fuji9.jpg 1x, 
                             images/portfolio/sanddunes@2x.jpg 2x" alt="ChatBots" />
        </a>
        <br/>
      </div>
      <br/> */}
    </div> 
  </section>
 
 
    )
  }
export default Portfolio;