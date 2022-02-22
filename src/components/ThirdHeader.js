import React from 'react';
import './ThirdHeader.css'

function ThirdHeader() {
  return (
    <div className='wrapper'>
        <div className='header-image '>
            <div class='partition'></div>
            <div className="header-copywriting">
                Not sure where to go? Perfect.
            </div>
            <div className='button-wrapper'>
                    <button className='header-btn'><span className='purple-gradient'>I'm flexible</span></button>
            </div>
        </div>
    </div>
  )
}

export default ThirdHeader