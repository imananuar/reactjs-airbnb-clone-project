import React from 'react';
import './AccountSettings.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBars, faUser } from "@fortawesome/free-solid-svg-icons";

function AccountSettings() {
  return (
    <div class="account-settings">
      <a href="#" className="host-text">Become a Host</a>
      <div className='globe-icon-div'>
        <FontAwesomeIcon icon={faGlobe} className="globe-icon" />
      </div>
      <div className="user-account" href="#" type="button">
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