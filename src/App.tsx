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
import Projects from './pages/Projects';
import MyContext from './context/MyContext';

function App() {
  const[loader,setLoader]=useState(false)
  const[subHead,setSubHead]=useState<number>(0)

  useEffect(()=>{
    setLoader(true)
  },[])
  return (
    loader?(<>
    <MyContext.Provider value={{subHead,setSubHead}}>
      <Header />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/development" element={<Development />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/policy" element={<Policy />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
    </Routes>
    </MyContext.Provider>
    </>):(<LoadingView />)  

  );
}

export default App;
