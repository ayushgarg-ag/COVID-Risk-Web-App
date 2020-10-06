import React from 'react';
import '../App.css';

function LocationsAdvanced(){
    return(
        <nav className="locations-advanced">
            <h2 className="title">EXPOSURE CALCULATION: ADVANCED</h2>
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

export default LocationsAdvanced;
