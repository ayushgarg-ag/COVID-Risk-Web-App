import React from 'react';
import '../App.css';

function CalculateHome(){
    return(
        <nav className="calculate-home">
            <h2 className="title">EXPOSURE CALCULATION</h2>
            <p className="desc">
                What kind of assessment?
            </p>
            <a href="/calculate-location">
                <button className="calculate-basic">BASIC</button><br/>
            </a>
            <a href="/calculate-location">
                <button className="calculate-advanced">ADVANCED</button>
            </a>
        </nav>
    )
}

export default CalculateHome;
