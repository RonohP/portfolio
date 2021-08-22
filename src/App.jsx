import './App.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import About from './components/About/about'
import Skills from './components/Skills/skills';
import Contact from './components/Contact/contact';
// import Projects from './components/Projects/projects';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      {/* <Projects/> */}
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
