import React from 'react';
import './App.css';
import MainComponent from './components/MainComponent'
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    

    <BrowserRouter>

    <div className="App">

      <MainComponent/>
       
    </div>
    

    </BrowserRouter>
  );
}

export default App;
