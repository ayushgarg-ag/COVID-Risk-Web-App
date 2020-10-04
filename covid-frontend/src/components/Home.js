import React from 'react';
import '../App.css';
import './Home.css';

function Home(){
    return(
        <nav className="Home">
            <h1>COVID-19<br/>EXPOSURE MODEL</h1>
            <p>
                This is a tool to help understand COVID-19 transmission risk to students 
                and teachers/professors due to transmission by microscopic airborne particles 
                in classroom settings.
            </p>
            <button>CALCULATE</button> <br/>
            <button>HOW IT WORKS</button>
        </nav>
    )
}

export default Home;