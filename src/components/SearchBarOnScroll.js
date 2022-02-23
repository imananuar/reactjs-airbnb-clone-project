import React from 'react';
import "./SearchBar.css";
import "./SearchBarOnScroll.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBarOnScroll() {
  return (
    <div className="search-bar-container-on-scroll">
        <div className="search-bar-on-scroll">
            <div className='child-components'>
                <div className='search-text-on-scroll' type="button">
                    Start your search
                </div>
                <div className='search-on-scroll my-auto'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon-on-scroll"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBarOnScroll