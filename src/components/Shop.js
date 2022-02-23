import React from 'react';
import './Shop.css';
import airbnbCard from "./images/airbnb-card.webp"

function Shop() {
  return (
    <section className="shop">
      <div className='shop-container'>
        <div className='shop-content'>
          <div className='shop-headline'>
            Shop Airbnb gift cards
          </div>
          <div className='learn-more'>
            <button className='learn-more-button'>Learn More</button>
          </div>
        </div>
        <div className='shop-img-div'>
          <img src={airbnbCard} className='shop-img'/>
        </div>
      </div>

    </section>
  )
}

export default Shop