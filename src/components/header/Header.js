import './Header.css'



const Header = () => {

 

  return (  
            <header id="header" className="s-header  ">
             <div className="container-fluid s-header__nav-wrap  sticky-top navbar-expand-lg navbar-collapse navbar-toggler" id="navbarTogglerDemo01">
              
             <nav className="s-header__nav d-flex" >
                <ul  style={{alignItems:'center',justifyContent:'center', fontSize:'25px', padding:'0%', marggin:'0%', color:'#DEA9D3', backgroundColor:'black'}}>
                  <li><a href="#hero">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#resume">Training</a></li>
                  <li><a href="#portfolio">Works</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </nav>
            </div>
            <a className=".s-header__nav s-header__menu-toggle navbar-expand-md navbar-toggler" href="#index" title="Menu">
              <span className="s-header__menu-icon" />
            </a>
            
          </header>
        )
    }
export default Header;

