import React from 'react';
import './Results.css';

function Results(){

    var percentFaculty = 0.0003;
    var percentStudent = 0.0087;

    //Stand-in data
    var probFaculty5 = 0.00002;
    var probFaculty25 = 0.00031;
    var probFaculty50 = 0.00034;
    var probFaculty75 = 0.0098;
    var probFaculty95 = 0.023;
    var probStudent5 = 0.00002;
    var probStudent25 = 0.00045;
    var probStudent50 = 0.0092;
    var probStudent75 = 0.0389;
    var probStudent95 = 0.043;

    return(
        <nav className="centered-layout">
            <h1 className="title">RESULTS</h1>
            <p className="desc">
            </p>
            <div>
                <div className="instructor-results">
                    <h3>For an Instructor:</h3><br/>
                    <h1>{percentFaculty} %</h1>
                    <h5>chance of being infected</h5>
                </div>
                <div className="student-results">
                    <h3>For a Student:</h3><br/>
                    <h1>{percentStudent} %</h1>
                    <h5>chance of being infected</h5>
                </div>
            </div><br/><br/>

            <div>
                <div >
                    <h3>Additional Breakdowns:</h3>
                </div><br/>
            </div>

            <div>
                <div className="instructor-results">
                    <div className="prob-infection">
                        <h4>Probability of Infection</h4>
                        {/* Does anyone know how to type < / I can't find the escape key and it throws and error when I just try to type <. */}
                        <h3>less than {probFaculty5}</h3>
                        <h3>less than {probFaculty25}</h3>
                        <h3>less than {probFaculty50}</h3>
                        <h3>less than {probFaculty75}</h3>
                        <h3>less than {probFaculty95}</h3>
                    </div>
                    <div className="chance">
                        <h4>Chance</h4>
                        <h3>5%</h3>
                        <h3>25%</h3>
                        <h3>50%</h3>
                        <h3>75%</h3>
                        <h3>95%</h3>
                    </div>
 
                    
                </div>
                <div className="student-results">
                    <div className="prob-infection">
                        <h4>Probability of Infection</h4>
                        <h3>less than {probStudent5}</h3>
                        <h3>less than {probStudent25}</h3>
                        <h3>less than {probStudent50}</h3>
                        <h3>less than {probStudent75}</h3>
                        <h3>less than {probStudent95}</h3>
                    </div>
                    <div className="chance">
                        <h4>Chance</h4>
                        <h3>5%</h3>
                        <h3>25%</h3>
                        <h3>50%</h3>
                        <h3>75%</h3>
                        <h3>95%</h3>
                    </div>
                </div>
            </div>


            <a href="/calculate-home">
                <button className="btn btn-primary">NEW CALCULATION</button>
            </a><br/><br/><br/>
        </nav>
    )
}

export default Results;