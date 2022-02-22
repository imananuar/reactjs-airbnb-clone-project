import { React, useState } from 'react';
import './AccountSettings.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBars, faUser } from "@fortawesome/free-solid-svg-icons";

function AccountSettings() {

  const [color, setColor] = useState(false);
  
  const changeColor = () => {

    window.scrollY >= 5 
    ? setColor(true) 
    : setColor(false);
  }

  window.addEventListener('scroll', changeColor);

  return (
    <div class={"account-settings"}>
      <a href="#" className={color? "host-text text-on-scroll": "host-text"}>Become a Host</a>
      <div className='globe-icon-div'>
        <FontAwesomeIcon icon={faGlobe} className={color? 'globe-icon text-on-scroll': 'globe-icon'} />
      </div>
      <div className={color? "user-account border-on-scroll": "user-account"} href="#" type="button">
        <span className='span-icon'>
          <FontAwesomeIcon icon={faBars} className="burger-menu-icon"/>
        </span>
        <span  className='span-icon'>
          <FontAwesomeIcon icon={faUser} className="user-icon"/>
        </span>
      </div>
    </div>
  )
}

export default AccountSettings