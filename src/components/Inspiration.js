import React from 'react';
import './Inspiration.css';

function Inspiration() {
  return (
    <div className='inspiration'>
        <div className='inspiration-headline'>Inspiration for future getaways</div>
        <div className='inspiration-suggestion'>
            <a href="#" class="a-1">Destinations for arts & culture</a>
            <a href="#" >Destinations for outdoor adventure</a>
            <a href="#" >Mountain cabins</a>
            <a href="#" >Beach destinations</a>
            <a href="#" >Popular destinations</a>
            <a href="#" >Unique Stays</a>
        </div>
        <div className='listed-countries'>
            <div className="col">
                <div className='district'>
                    <a href="#">Phoenix</a>
                </div>
                <div className="city">
                    <a href="#">Arizona</a>
                </div>
            </div>
            <div className="col-2">
                <div className='district'>
                    <a href="#">Hot Springs</a>
                </div>
                <div className="city">
                    <a href="#">Arkansas</a>
                </div>
            </div>
            <div className='col-2'>
                <div className='district'>
                    <a href="#">Los Angeles</a>
                </div>
                <div className="city">
                    <a href="#">California</a>
                </div>
            </div>
            <div className='col-2'>
                <div className='district'>
                    <a href="#">San Diego</a>
                </div>
                <div className="city">
                    <a href="#">California</a>
                </div>
            </div>
            <div className="col">
                <div className='district'>
                    <a href="#">San Fransisco</a>
                </div>
                <div className="city">
                    <a href="#">California</a>
                </div>
            </div>
            <div className="col-2">
                <div className='district'>
                    <a href="#">Barcelona</a>
                </div>
                <div className="city">
                    <a href="#">Catalonia</a>
                </div>
            </div>
            <div className="col-2">
                <div className='district'>
                    <a href="#">Prague</a>
                </div>
                <div className="city">
                    <a href="#">Czechia</a>
                </div>
            </div>
            <div className="col-2">
                <div className='district'>
                    <a href="#">Washington</a>
                </div>
                <div className="city">
                    <a href="#">District of Columbia</a>
                </div>
            </div>
            <div className="col">
                <div className='district'>
                    <a href="#">Keswick</a>
                </div>
                <div className="city">
                    <a href="#">England</a>
                </div>
            </div>
            <div className="col-2">
                <div className='district'>
                    <a href="#">London</a>
                </div>
                <div className="city">
                    <a href="#">England</a>
                </div>
            </div>
            <div className="col-2">
                <div className='district'>
                    <a href="#">Scarborough</a>
                </div>
                <div className="city">
                    <a href="#">England</a>
                </div>
            </div>
            <div className="col-2">
                <a href="#" className="show-more">Show More</a>
            </div>
        </div>
    </div>
  )
}

export default Inspiration