import React from 'react';
import './Home.css';

function Home(){
    return(
        <nav className="left-layout">
            <h1 className="title">COVID-19<br/>EXPOSURE MODEL</h1>
            <p className="desc">
                This is a tool to help understand COVID-19 transmission risk to students 
                and teachers/professors due to transmission by microscopic airborne particles 
                in classroom settings.
            </p>
            <a href="/calculate-home">
                <button className="btn btn-primary">CALCULATE</button><br/>
            </a>
            <a href="/about">
                <button className="btn btn-basic">HOW IT WORKS</button>
            </a>
        </nav>
    )
}

export default Home;