import React, { useState, useEffect } from 'react';
import './Results.css';

function Results(){

    const [percentFaculty, setPercentFaculty] = useState(0.68);
    const [percentStudent, setPercentStudent] = useState(0.83);
    const [probFaculty5, setProbFaculty5] = useState(0.01);
    const [probFaculty25, setProbFaculty25] = useState(0.06);
    const [probFaculty50, setProbFaculty50] = useState(0.18);
    const [probFaculty75, setProbFaculty75] = useState(0.54);
    const [probFaculty95, setProbFaculty95] = useState(2.81);
    const [probStudent5, setProbStudent5] = useState(0.04);
    const [probStudent25, setProbStudent25] = useState(0.14);
    const [probStudent50, setProbStudent50] = useState(0.34);
    const [probStudent75, setProbStudent75] = useState(0.82);
    const [probStudent95, setProbStudent95] = useState(3.17);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/classroombasic', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const result = await response.json();

            setPercentFaculty(result.percentFaculty);
            setPercentStudent(result.percentStudent);
            setProbFaculty5(result.probFaculty5);
            setProbFaculty25(result.probFaculty25);
            setProbFaculty50(result.probFaculty50);
            setProbFaculty75(result.probFaculty75);
            setProbFaculty95(result.probFaculty95);
            setProbStudent5(result.probStudent5);
            setProbStudent25(result.probStudent25);
            setProbStudent50(result.probStudent50);
            setProbStudent75(result.probStudent75);
            setProbStudent95(result.probStudent95);
        }
        fetchData();
    }, []);


    return(
        <nav className="results">
            <div className="info-container">
                <div className="infobar">
                    <h1 className="best-estimate">{percentFaculty}%</h1>
                    <div className="infobox">
                        <h1 className="info-title">FACULTY</h1>
                        <p className="info-p">The chance of a faculty member being infected is <strong className="estimate-text">VERY LOW</strong></p>
                        <p className="info-p"><strong>However,</strong> this does <strong>NOT</strong> mean infection is impossible. Please continue to adhere to COVID-19 precaution guidelines.</p>
                    </div>
                </div>
                <div className="breakdown">
                    <h1 className="breakdown-title">STATISTICAL BREAKDOWN</h1>
                    <p>While our best estimate for the infection probability is <strong className="estimate-text">{percentFaculty}%,</strong> please note that this is still an approximation. However...</p>
                    <p className="confidence-p">We are <strong>95%</strong> confident that the infection probability is at least less than <strong className="orange-text">{probFaculty95}%</strong></p>
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
                        <p className="info-p"><strong>However,</strong> this does <strong>NOT</strong> mean infection is impossible. Please continue to adhere to COVID-19 precaution guidelines.</p>
                    </div>
                </div>
                <div className="breakdown">
                    <h1 className="breakdown-title">STATISTICAL BREAKDOWN</h1>
                    <p>While our best estimate for the infection probability is <strong className="estimate-text">{percentStudent}%,</strong> please note that this is still an approximation. However...</p>
                    <p className="confidence-p">We are <strong>95%</strong> confident that the infection probability is at least less than <strong className="orange-text">{probStudent95}%</strong></p>
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