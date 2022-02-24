import React from 'react';
import "./ContactUs.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCopyright, faGlobe} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

function ContactUs() {
  return (
    <div className="other-information">
        <div className='copyright-container'>
            <div className='copyright'>
                <div>
                    <FontAwesomeIcon icon={faCopyright} className="copyright-icon" />
                    2022 Iman, Inc.
                </div>
                <span className="dot">
                    .
                </span>
                <a href="#">Privacy</a>
                <span className="dot">
                    .
                </span>
                <a href="#">Terms</a>
                <span className="dot">
                    .
                </span>
                <a href="#">Sitemap</a>
            </div>
        </div>
        <div className='social-media-currency'>
            <div className='currency'>
                <FontAwesomeIcon icon={faGlobe} className= 'globe-footer' />
                <a href="#" className='english'>English (US)</a>
                <a href="#" className='rm'>RM</a>
                <a href="#" className='myr'>MYR</a>
            </div>
            <div className='social-media'>
                <FontAwesomeIcon icon={faFacebookF} className= 'fb-footer' />
                <FontAwesomeIcon icon={faTwitter} className= 'twitter-footer' />
                <FontAwesomeIcon icon={faInstagram} className= 'ig-footer' />
            </div>
        </div>
    </div>
  )
}

export default ContactUs