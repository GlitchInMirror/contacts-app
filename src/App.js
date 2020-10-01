import React, { useState, useEffect }from 'react';
import './App.css';
import MainComponent from './components/MainComponent'
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false;
  }

  const [dark, setMode] = useState(getMode());
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark))
  }, [dark])


  const toggleMode = () => {
    setMode(!dark)
  }


  return (
    

    <BrowserRouter>

      <div className={dark ? "App dark__mode" : "App"}>

      <MainComponent/>
       
    </div>
    

    </BrowserRouter>
  );
}

export default App;
