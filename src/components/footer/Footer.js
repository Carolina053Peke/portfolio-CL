
import './Footer.css'

const footer = () => {
  



  return (  
            <footer className="s-footer">
            <div className="row">
              <div className="column large-8 medium-6 w-1000-stack ss-copyright">
                <span>© Copyright Carolina Lemes 2021</span> 
              </div>
              <div className="column">
                <a href="#hero" className="s-footer__scroll-link smoothscroll">
                <span className="scroll-text">Scroll up </span>
                <span className="scroll-arrow">
                    <svg xmlns="#" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}><path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z" /></svg>
                </span>
                </a>
              </div> 
            </div>
          </footer>
          
        )
    }
export default footer;