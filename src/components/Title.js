import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";


function Title() {
  return (
    <div className="title">
        <FontAwesomeIcon icon={faAirbnb} className="airbnb-icon"/>
        <a href="#" className="airbnb-title">airbnb</a>
    </div>
  )
}

export default Title