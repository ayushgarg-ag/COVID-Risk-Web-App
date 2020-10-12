import React from 'react';
import './Results.css';

function Results(){
    return(
        <nav className="centered-layout">
            <h1 className="title">RESULTS</h1>
            <p className="desc">
            </p>
            <a href="/calculate-home">
                <button className="btn btn-primary">NEW CALCULATION</button><br/>
            </a>
        </nav>
    )
}

export default Results;