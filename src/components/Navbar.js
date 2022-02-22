import React from 'react';
import './Navbar.css';
import Title from './Title';
import Directory from './Directory';
import AccountSettings from './AccountSettings';
import MediaQuery from 'react-responsive';


function Navbar() {
    
    return (
    <nav className="navbar">
        <Title />
        <MediaQuery query ="(min-width:949px)" >
          <Directory />
        </MediaQuery>
        <AccountSettings />
    </nav>
  )
}

export default Navbar