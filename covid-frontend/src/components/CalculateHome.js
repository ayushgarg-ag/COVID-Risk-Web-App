import React from 'react';
import './CalculateHome.css';

function CalculateHome(){
    return(
        <nav className="calculate-home">
            <h2 className="title">EXPOSURE CALCULATION</h2>
            <p className="desc">
                What kind of assessment?
            </p>
            <a href="/locations-basic">
                <button className="btn btn-primary">BASIC</button><br/>
            </a>
            <a href="/locations-advanced">
                <button className="btn btn-primary">ADVANCED</button>
            </a>
            <p className="button-desc">The <strong>advanced assessment</strong> calculates...</p>
        </nav>
    )
}

export default CalculateHome;
