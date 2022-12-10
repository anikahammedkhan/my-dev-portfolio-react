import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Router';
function App() {

  return (
    <div className="App relative">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
