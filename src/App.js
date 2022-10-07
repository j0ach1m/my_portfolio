
import "bootstrap/dist/css/bootstrap.min.css";
import './css/App.css';
import NavBar from './components/navbar';
import Intro from "./components/intro";
import About from "./components/About";
import Skills from "./components/Skill";
import Portfolio from "./components/Portfolio";
import Github from "./components/github";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import Cards from "./components/Cards";




function App() {
  return (
    <div>
      <NavBar />
      <Intro />
      <About />
      <Skills />
      <Portfolio />
<Cards />
      <Github />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
