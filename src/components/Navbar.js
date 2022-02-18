import React from 'react';
import './Navbar.css';
import Title from './Title';
import Directory from './Directory';
import AccountSettings from './AccountSettings';


function Navbar() {
    
    return (
    <nav className="navbar">
        <Title />
        <Directory />
        <AccountSettings />
    </nav>
  )
}

export default Navbar