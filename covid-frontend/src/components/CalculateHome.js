import React from 'react';
import './CalculateHome.css';

function CalculateHome(){
    return(
        <nav className="calculate-home">
            <h2 className="title">EXPOSURE CALCULATION</h2>
            <p className="desc">
                What kind of assessment?
            </p>
            <a href="/basic-classroom">
                <button className="calculate-basic-button">BASIC</button><br/>
            </a>
            <p className="button-desc">The <strong>basic assessment</strong> calculates...</p>
            <a href="/calculate-home">
                <button className="calculate-advanced-button">ADVANCED</button>
            </a>
            <p className="button-desc">The <strong>advanced assessment</strong> calculates...</p>
        </nav>
    )
}

export default CalculateHome;