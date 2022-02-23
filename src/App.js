import React, { useState } from 'react';
import './App.css';
import './Circular.css';
import Navbar from './components/Navbar';
import SecondHeader from './components/SecondHeader';
import ThirdHeader from './components/ThirdHeader';
import NextTrip from './components/NextTrip';
import Discover from './components/Discover';
import Shop from './components/Shop';
import Question from './components/Question';

function App() {

  const [color, setColor] = useState(false);
  
  const changeColor = () => {

    window.scrollY >= 5 
    ? setColor(true) 
    : setColor(false);
  }

  window.addEventListener('scroll', changeColor);
   
  return (
    <div>
      <header>
        <Navbar />
        {color ? <div className="padding-on-scroll" /> :<SecondHeader />}
        <ThirdHeader />
      </header>

      <main id="main">
        <NextTrip />
        <Discover />
        <Shop />
        <Question />
      </main>
    </div>
  );
}

export default App;
