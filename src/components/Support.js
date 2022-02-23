import React from 'react';
import "./Support.css";

function Support() {
  return (
    <div className='grid'>
        <div className='col'>
            <div className='support-headline'>Support</div>
            <ul className="child-headline"> 
                <li className='subcategories'>
                    <a>Help Center</a>
                </li>
                <li className='subcategories'>
                    <a>Safety Information</a>
                </li>
                <li className='subcategories'>
                    <a>Cancellation options</a>
                </li>
                <li className='subcategories'>
                    <a>Our COVID-19 Response</a>
                </li>
                <li className='subcategories'>
                    <a>Supporting people with disabilities</a>
                </li>
                <li className='subcategories'>
                    <a>Report a neighbourhood concern</a>
                </li>
            </ul>
        </div>
        <div className='col-2'>
            <div className='support-headline'>Community</div>
            <ul className="child-headline"> 
                <li className='subcategories'>
                    <a>Airbnb.org: disaster relief housing</a>
                </li>
                <li className='subcategories'>
                    <a>Support Afghan refugees</a>
                </li>
                <li className='subcategories'>
                    <a>Combating discrimination</a>
                </li>
            </ul>
        </div>
        <div className='col-2'>
            <div className='support-headline'>Hosting</div>
            <ul className="child-headline"> 
                <li className='subcategories'>
                    <a>Try hosting</a>
                </li>
                <li className='subcategories'>
                    <a>AirCover:protection for Hosts</a>
                </li>
                <li className='subcategories'>
                    <a>Explore hosting resources</a>
                </li>
                <li className='subcategories'>
                    <a>Visit our community forum</a>
                </li>
                <li className='subcategories'>
                    <a>How to host responsibly</a>
                </li>
            </ul>
        </div>
        <div className='col-2'>
            <div className='support-headline'>About</div>
            <ul className="child-headline"> 
                <li className='subcategories'>
                    <a>Newsroom</a>
                </li>
                <li className='subcategories'>
                    <a>Learn about new features</a>
                </li>
                <li className='subcategories'>
                    <a>Letter from our rounders</a>
                </li>
                <li className='subcategories'>
                    <a>Careers</a>
                </li>
                <li className='subcategories'>
                    <a>Investors</a>
                </li>
                <li className='subcategories'>
                    <a>Airbnb Luxe</a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Support