import { React, useState } from 'react';
import './Title.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";

function Title() {
  
  const [color, setColor] = useState(false);
  
  const changeColor = () => {

    window.scrollY >= 5 
    ? setColor(true) 
    : setColor(false);
  }

  window.addEventListener('scroll', changeColor);
  
  return (
    <div className="title">
      <div className={color? "title-and-logo-wrapper title-on-scroll" : "title-and-logo-wrapper"}>
        <FontAwesomeIcon icon={faAirbnb} className="airbnb-icon"/>
        <a href="#" className={color ? "airbnb-title title-on-scroll": "airbnb-title"}>airbnb</a>
      </div>
    </div>
  )
}

export default Title;