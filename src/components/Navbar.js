import {React, useState} from 'react';
import './Navbar.css';
import Title from './Title';
import Directory from './Directory';
import AccountSettings from './AccountSettings';
import MediaQuery from 'react-responsive';

function Navbar() {

  const [color, setColor] = useState(false);
  
  const changeColor = () => {

    window.scrollY >= 5 
    ? setColor(true) 
    : setColor(false);
  }

  window.addEventListener('scroll', changeColor);

    return (
    <nav className={color ? 'navbar navbar-on-scroll': 'navbar'}>
        <Title />
        <MediaQuery query ="(min-width:949px)">
          <Directory />
        </MediaQuery>
        <AccountSettings />
    </nav>
  )
}

export default Navbar