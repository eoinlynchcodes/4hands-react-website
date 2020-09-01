import React from 'react';
import './App.css';
import Navigation from './components/Navigation'; 
import RightPanel from './components/RightPanel';
import LeftPanel from './components/LeftPanel';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Navigation/>
      <div className="container">
      <LeftPanel/>
      <RightPanel/>
      </div>
      <Footer/>


    </div>
  );
}

export default App;
