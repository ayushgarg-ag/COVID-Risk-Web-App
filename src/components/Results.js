import React from 'react';
import './Results.css';

function Results(){

    var percentFaculty = 0.68;
    var percentStudent = 0.83;

    var probFaculty5 = 0.01;
    var probFaculty25 = 0.06;
    var probFaculty50 = 0.18;
    var probFaculty75 = 0.54;
    var probFaculty95 = 2.81;
    var probStudent5 = 0.04;
    var probStudent25 = 0.14;
    var probStudent50 = 0.34;
    var probStudent75 = 0.82;
    var probStudent95 = 3.17;

    return(
        <nav className="results">
            <div className="info-container">
                <div className="infobar">
                    <h1 className="best-estimate">{percentFaculty}%</h1>
                    <div className="infobox">
                        <h1 className="info-title">FACULTY</h1>
                        <p className="info-p">The chance of a faculty member being infected is <strong className="estimate-text">VERY LOW</strong></p>
                        <p className="info-p"><strong>HOWEVER,</strong> this does <strong>NOT</strong> mean infection is impossible. Please continue to adhere to COVID-19 precaution guidelines.</p>
                    </div>
                </div>
                <div className="breakdown">
                    <h1 className="breakdown-title">STATISTICAL BREAKDOWN</h1>
                    <p>While our best estimate for the infection probability is <strong className="estimate-text">{percentFaculty}%,</strong> please note that this is still an approximation. However...</p>
                    <p className="confidence-p">We are <strong>95%</strong> confident that the infection probability is less than <strong className="orange-text">{probFaculty95}%</strong></p>
                    <p className="confidence-p"><strong>75%</strong> confident: less than <strong className="orange-text">{probFaculty75}%</strong></p>
                    <p className="confidence-p"><strong>50%</strong> confident: less than <strong className="orange-text">{probFaculty50}%</strong></p>
                    <p className="confidence-p"><strong>25%</strong> confident: less than <strong className="orange-text">{probFaculty25}%</strong></p>
                    <p className="confidence-p"><strong> 5%</strong> confident: less than <strong className="orange-text">{probFaculty5}%</strong></p>
                    <br></br>
                </div>
            </div>

            <div className="info-container">
                <div className="infobar">
                    <h1 className="best-estimate">{percentStudent}%</h1>
                    <div className="infobox">
                        <h1 className="info-title">STUDENTS</h1>
                        <p className="info-p">The chance of a student being infected is <strong className="estimate-text">VERY LOW</strong></p>
                        <p className="info-p"><strong>HOWEVER,</strong> this does <strong>NOT</strong> mean infection is impossible. Please continue to adhere to COVID-19 precaution guidelines.</p>
                    </div>
                </div>
                <div className="breakdown">
                    <h1 className="breakdown-title">STATISTICAL BREAKDOWN</h1>
                    <p>While our best estimate for the infection probability is <strong className="estimate-text">{percentStudent}%,</strong> please note that this is still an approximation. However...</p>
                    <p className="confidence-p">We are <strong>95%</strong> confident that the infection probability is less than <strong className="orange-text">{probStudent95}%</strong></p>
                    <p className="confidence-p"><strong>75%</strong> confident: less than <strong className="orange-text">{probStudent75}%</strong></p>
                    <p className="confidence-p"><strong>50%</strong> confident: less than <strong className="orange-text">{probStudent50}%</strong></p>
                    <p className="confidence-p"><strong>25%</strong> confident: less than <strong className="orange-text">{probStudent25}%</strong></p>
                    <p className="confidence-p"><strong> 5%</strong> confident: less than <strong className="orange-text">{probStudent5}%</strong></p>
                    <br></br>
                </div>
            </div>
        </nav>
    )
}

export default Results;