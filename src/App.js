import React, { useState } from 'react';
import './App.css';
import './Circular.css';
import Navbar from './components/Navbar';
import SecondHeader from './components/SecondHeader';
import ThirdHeader from './components/ThirdHeader';

function App() {

  // setting mobile header
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)

  // Change nav color when scrolling
  const[color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener('scroll', changeColor);

  // Close Menu on click
  const closeMenu = () => setClick(false)
   
  return (
    <header className={color ? 'header-transparent': ''}>
      <Navbar />
      <SecondHeader />
      <ThirdHeader />
    </header>
  );
}

export default App;
