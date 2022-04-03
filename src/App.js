
import "bootstrap/dist/css/bootstrap.min.css";
import './css/App.css';
import NavBar from './components/navbar';
import Intro from "./components/intro";
import About from "./components/About";
import Skills from "./components/Skill";
import Portfolio from "./components/Portfolio";
import Carousel from "./components/carousel";
import Github from "./components/github";
import Contact from "./components/Contact";
import Footer from "./components/footer";




function App() {
  return (
    <div>
      <NavBar />
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Carousel />
      <Github />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
