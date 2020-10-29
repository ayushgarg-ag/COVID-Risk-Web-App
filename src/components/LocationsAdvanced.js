import React from 'react';
import '../App.css';
import './Locations.css';

function LocationsAdvanced(){
  return(
      <nav className="centered-layout">
          <h2 className="title">EXPOSURE CALCULATION: ADVANCED</h2>
          <p className="desc">
              What kind of Location?
          </p>
          <a href="/advanced-classroom">
              <button id="classroom-button" className="btn btn-secondary"><b>CLASSROOM</b></button>
          </a>
          <a href="/advanced-classroom">
              <button id="dining-button" className="btn btn-secondary"><b>DINING AREA</b></button>
          </a>
          <a href="/advanced-classroom">
              <button id="commonroom-button" className="btn btn-secondary"><b>COMMON ROOM</b></button>
          </a>
      </nav>
  )
}

export default LocationsAdvanced;
