import React from 'react';
import '../App.css';

function LocationsBasic(){
    return(
        <nav className="centered-layout">
            <h2 className="title">EXPOSURE CALCULATION: BASIC</h2>
            <p className="desc">
                What kind of Location?
            </p>
            <a href="/basic-classroom">
                <button className="btn btn-primary">CLASSROOM</button>
            </a>
            <a href="/basic-classroom">
                <button className="btn btn-primary">DINING AREA</button>
            </a>
            <a href="/basic-classroom">
                <button className="btn btn-primary">COMMON ROOM</button>
            </a>
        </nav>
    )
}

export default LocationsBasic;
