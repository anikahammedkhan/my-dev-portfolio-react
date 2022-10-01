import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import TechStack from './components/TechStack/TechStack';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <TechStack></TechStack>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
