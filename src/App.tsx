import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import Services from './pages/Services';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
    <Services></Services>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
