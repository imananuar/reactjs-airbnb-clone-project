import React from 'react';
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
      <div className="search-bar-container">
          <div className='search-bar'>
            <div className="child-components">
                <div className='destination my-auto'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
                    <a href="#">Where are you going?</a>
                </div>
                <div className='location my-auto'>
                    <div className='suggestion'>Location</div>
                    <input class="location-suggestion" 
                    aria-autocomplete="none" 
                    autocomplete="off" 
                    autocorrect="off" 
                    spellcheck="false" 
                    id="bigsearch-query-location-input" 
                    name="query" 
                    aria-describedby="bigsearch-query-location-description" 
                    placeholder="Where are you going?" 
                    data-testid="structured-search-input-field-query" 
                    value="" />
                </div>
                
                <div className='check-in my-auto'>
                    <div className='suggestion'>Check in</div>
                    <div className='suggestion-subtext'>Add dates</div>
                </div>

                <div className='check-out my-auto'>
                    <div className='suggestion'>Check out</div>
                    <div className='suggestion-subtext'>Add dates</div>
                </div>

                <div className='guest my-auto'>
                    <div className="guest-search my-auto">
                        <div className='suggestion'>Guests</div>
                        <div className='suggestion-subtext'>Add guests</div>
                    </div>
                    <div className='search my-auto'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default SearchBar