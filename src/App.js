
import "bootstrap/dist/css/bootstrap.min.css";
import './css/App.css';
import NavBar from './components/navbar';
import Intro from "./components/intro";
import About from "./components/About";

function App() {
  return (
    <div>
      <NavBar />
      <Intro />
      <About />

    </div>
  );
}

export default App;
