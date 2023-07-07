import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Policy from './pages/Policy';
import About from './pages/About';
import Development from './pages/Development';
import Services from './pages/Services';
import Header from './components/structuralComponents/header/Header';
import { useEffect, useState } from 'react';
import LoadingView from './components/animationComponents/loadingView/LoadingView';

function App() {
  const[loader,setLoader]=useState(false)
  useEffect(()=>{
    setLoader(true)
  },[])
  return (
    loader?(<>
      <Header />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/development" element={<Development />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/Policy" element={<Policy />}></Route>
    </Routes></>):(<LoadingView />)  
  );
}

export default App;
