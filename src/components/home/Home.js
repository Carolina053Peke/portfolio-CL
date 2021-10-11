/* eslint-disable jsx-a11y/anchor-has-content */

import './Home.css';

const Home = () => {
    return (
            <section id="hero" className="s-hero target-section">
            <div className="s-hero__bg rellax" data-rellax-speed={-4} />
            <div className="row s-hero__content">
                <div className="column">
                <div className="s-hero__content-about">
                    <h1>Hi, I'm Carolina Lemes.</h1>
                    <h3>
                    I am a Freelance <span>Web Designer</span> and <span>Programmer</span>.<br></br>
                    whith over 5 years of expertise and experience.
                    </h3>
                    <div className="s-hero__content-social">
                    <a href='https://www.instagram.com/soypeke_thefullstackdevs/'><i className="fab fa-instagram" aria-hidden="true" /></a>
                    <a href='https://www.linkedin.com/in/carolina-vanesa-lemes-quispe/'><i className="fab fa-linkedin" aria-hidden="true" /></a>
                    <a href='https://github.com/Carolina053Peke'><i className="fab fa-github" aria-hidden="true" /></a>
                    </div>
                </div> 
            </div>
            </div> 
            <div className="row s-hero__scroll">
                <a href="#about" className="s-hero__scroll-link smoothscroll">
                <span className="scroll-arrow">
                    <svg xmlns="#" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: 'rotate(180deg)', msFilter: ''}}><path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z" /></svg>
                </span>
                <span className="scroll-text">Scroll Down</span>
                </a>
            </div>
            </section>

        )
    }
export default Home;