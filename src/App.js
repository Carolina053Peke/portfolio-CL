import './App.css';
import './main';


import Header from './components/header/Header';
import About from './components/about/About';
// import Preloader from './components/preloader/Preloader';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contactus from './components/contactus/Contactus';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
    
      <Resume />
      <Portfolio />
      <Contactus />
      <Footer />
    </div>
  );
}

export default App;
