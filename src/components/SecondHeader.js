import React, { useState, useEffect } from 'react';
import './SecondHeader.css'
import SearchBar from './SearchBar';
import Directory from './Directory';
import MediaQuery from 'react-responsive';

function SecondHeader(){
  return (
    <div className="second-header">
        <MediaQuery query ="(max-width:948px)" >
          <Directory />
        </MediaQuery>
        <SearchBar />
    </div>
  )
}

export default SecondHeader;