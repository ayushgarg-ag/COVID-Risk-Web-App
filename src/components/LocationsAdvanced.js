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
                <button className="btn btn-primary">CLASSROOM</button><br/>
            </a>
            <a href="/basic-classroom">
                <button className="btn btn-primary">DINING</button>
            </a>
            <a href="/basic-classroom">
                <button className="btn btn-primary">COMMON</button>
            </a>
        </nav>
    )
}

export default LocationsAdvanced;
