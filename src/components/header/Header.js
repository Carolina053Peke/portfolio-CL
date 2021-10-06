import './Header.css'



const Header = () => {
  return (  
            <header className="s-header navbar sticky-top" >
            <div className="container-fluid s-header__nav-wrap">
              
              <nav className="s-header__nav">
                <ul style={{alignItems:'center', fontSize:'25px', padding:'0%', marggin:'0%', color:'#DEA9D3', backgroundColor:'black'}}>
                  <li><a href="#Hero">Home</a></li>
                  <li><a href="#About">About</a></li>
                  <li><a href="#Resume">Resume</a></li>
                  <li><a href="#Portfolio">Works</a></li>
                  <li><a href="#Contact">Contact</a></li>
                </ul>
              </nav>
            </div>
            <a className="s-header__menu-toggle" href="#index" title="Menu">
              <span className="s-header__menu-icon" />
            </a>
          </header>
        )
    }
export default Header;