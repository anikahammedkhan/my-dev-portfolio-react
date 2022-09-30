import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import TechStack from './components/TechStack/TechStack';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <TechStack></TechStack>
    </div>
  );
}

export default App;
