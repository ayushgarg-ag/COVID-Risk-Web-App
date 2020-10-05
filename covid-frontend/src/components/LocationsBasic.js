import React from 'react';
import '../App.css';

function LocationsBasic(){
    return(
        <nav className="locations-basic">
            <h2 className="title">EXPOSURE CALCULATION: BASIC</h2>
            <p className="desc">
                What kind of Location?
            </p>
            <a href="/basic-classroom">
                <button className="calculate-classroom">CLASSROOM</button><br/>
            </a>
            <a href="/basic-classroom">
                <button className="calculate-dining">DINING</button>
            </a>
            <a href="/basic-classroom">
                <button className="calculate-common">COMMON</button>
            </a>
        </nav>
    )
}

export default LocationsBasic;
