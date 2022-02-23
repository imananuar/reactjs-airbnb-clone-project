import React from 'react';
import "./Discover.css"

function Discover() {
  return (
    <section id="discover" className='discover'>
      <div className="discover-headline">Discover Airbnb Experience</div>
      <div className="discover-card">
        <div className="experiences">
          <div className="discover-wrapper">
            <div className="exp-headline">Things to do on your trip</div>
            <button className="exp-button">Experiences</button>
          </div>
        </div>
        <div className="online-experiences">
          <div className='discover-wrapper'>
            <div className="exp-headline">Things to do from home</div>
            <button className='exp-button'>Online Experiences</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discover