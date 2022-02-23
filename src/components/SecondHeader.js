import React, { useState, useEffect } from 'react';
import './SecondHeader.css'
import SearchBar from './SearchBar';
import Directory from './Directory';
import MediaQuery from 'react-responsive';

function SecondHeader(){
  const [color, setColor] = useState(false);
  
  const changeColor = () => {

    window.scrollY >= 5 
    ? setColor(true) 
    : setColor(false);
  }

  window.addEventListener('scroll', changeColor);
  return (
    <div className="second-header">
        <MediaQuery query ="(max-width:948px)" >
          <div class="directory-wrapper">
            <Directory />
          </div>
        </MediaQuery>
        <SearchBar />
    </div>
  )
}

export default SecondHeader;