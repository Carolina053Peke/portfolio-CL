import './Header.css'



const Header = () => {
  return (  
            <header id="header" className="s-header ">
             <div className="navbar s-header__nav-wrap sticky-top navbar-expand-lg " id="navbarTogglerDemo03">
             <nav className="s-header__nav " >
                <ul>
                  <li><a href="#hero">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#resume">Training</a></li>
                  <li><a href="#portfolio">Works</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </nav>
            </div>
            <a className="s-header__menu-toggle navbar-expand-lg " href="#index" title="Menu" data-toggle="collapse">
              <span className="s-header__menu-icon navbar-toggler-icon" />
            </a>
          </header>
        )
    }
export default Header;

