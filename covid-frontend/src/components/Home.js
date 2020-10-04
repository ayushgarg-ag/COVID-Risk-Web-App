import React from 'react';
import './Home.css';

function Home(){
    return(
        <nav className="home">
            <h1 className="title">COVID-19<br/>EXPOSURE MODEL</h1>
            <p className="desc">
                This is a tool to help understand COVID-19 transmission risk to students 
                and teachers/professors due to transmission by microscopic airborne particles 
                in classroom settings.
            </p>
            <button className="calculate_button">CALCULATE</button> <br/>
            <button className="works_button">HOW IT WORKS</button>
        </nav>
    )
}

export default Home;