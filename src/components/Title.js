import React from 'react';
import './Title.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";


function Title() {
  return (
    <div className="title">
      <div className="title-and-logo-wrapper">
        <FontAwesomeIcon icon={faAirbnb} className="airbnb-icon"/>
        <a href="#" className="airbnb-title">airbnb</a>
      </div>
    </div>
  )
}

export default Title