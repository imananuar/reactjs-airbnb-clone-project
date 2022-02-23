import React from 'react';
import './Question.css';

function Question() {
  return (
    <section className="hosting">
      <div className='hosting-wrapper'>
        <div className='hosting-child-components'>
          <div className='hosting-container'>
            <div className='question'>Questions about hosting?</div>
          </div>
          <div className='superhost-button'>
            <button className="ask-button">Ask a Superhost</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Question