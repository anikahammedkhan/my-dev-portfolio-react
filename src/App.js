import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import TechStack from './components/TechStack/TechStack';
import About from './components/About/About';
import Main from './layout/Main';
import Contact from './components/Contact/Contact';
import Error from './components/Error/Error';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Hero /> },
        { path: '/home', element: <Hero /> },
        { path: '/about', element: <About /> },
        { path: '/techState', element: <TechStack /> },
        { path: '/projects', element: <Projects /> },
        { path: '/contact', element: <Contact /> },
      ]
    },
    { path: '*', element: <Error></Error> }
  ]);
  return (
    <div className="App relative">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
