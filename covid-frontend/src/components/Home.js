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
            {/* 
            @Donghan I made your buttons links, also for styling for vars w/ 2 words I changed it to word1-word2 instead of _ */}
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