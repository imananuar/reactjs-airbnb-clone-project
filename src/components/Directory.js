import React from 'react'
import './Directory.css';

function Directory() {
  return (
    <div class="directory">
      <div class='directory-container'>
        <a href="#" className="d-text text-places default-underline">Places to stay</a>
      </div>
      <div class='directory-container'>
        <a href="#" className='d-text text-exp hover-underline-animation'>Experiences</a>
      </div>
      <div class='directory-container'>
        <a href="#" className='d-text text-on-exp hover-underline-animation'>Online Experiences</a>
      </div>
    </div>
  )
}

export default Directory