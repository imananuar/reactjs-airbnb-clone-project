import React from 'react';
import Card from './Card';
import './NextTrip.css'

function NextTrip() {

  return (
    <div className="next-trip">
      <div className='next-trip-headline'>Inspiration for your next trip</div>
      <div className='card-div'>
        <Card />
      </div>
    </div>
  )
}

export default NextTrip