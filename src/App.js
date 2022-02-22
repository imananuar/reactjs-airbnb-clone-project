import React, { useState } from 'react';
import './App.css';
import './Circular.css';
import Navbar from './components/Navbar';
import SecondHeader from './components/SecondHeader';
import ThirdHeader from './components/ThirdHeader';

function App() {
   
  return (
    <header>
      <Navbar />
      <SecondHeader />
      <ThirdHeader />
    </header>
  );
}

export default App;
