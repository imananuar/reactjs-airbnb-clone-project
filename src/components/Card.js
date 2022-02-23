import {React, useState} from 'react';
import './Card.css';
import georgetown from "./images/next-trip-1.webp";
import pd from "./images/next-trip-2.webp";
import ks from "./images/next-trip-3.webp";
import ipoh from "./images/next-trip-4.webp";

function Card() {

    const [destinations, useDestinations] = useState([
        {bgImage: georgetown, location: 'George Town', distance: '251', color: "#BC1A6E", id:1},
        {bgImage: pd, location: 'Port Dickson', distance: '110', color: "#D93B30", id:2},
        {bgImage: ks, location: 'Kuala Selangor', distance: '1', color: "#DE3151",  id:3},
        {bgImage: ipoh, location: 'Ipoh', distance: '140', color: "#CC2D4A",  id:4}
    ]);
    // ]

    return (
        <div className='card-container'>
                {destinations.map((destination) => (
                    <div className="card" key={destination.id}>
                        <div className="card-img">
                            <img src={destination.bgImage} className="image"/>
                        </div>
                        <div className="text-container" style={{backgroundColor: destination.color}}>
                            <div className="text-component">
                                <div className="location">{destination.location}</div>
                                <div className="distance">{destination.distance} kilometers away</div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Card