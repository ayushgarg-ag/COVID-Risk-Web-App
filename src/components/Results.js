import React, { useState, useEffect } from 'react';
import './Results.css';

function Results(){

    // const [percentFaculty, setPercentFaculty] = useState(localStorage.getItem('PercentFaculty') || 0.68);
    // const [percentStudent, setPercentStudent] = useState(localStorage.getItem('PercentStudent') || 0.83);
    // const [probFaculty5, setProbFaculty5] = useState(localStorage.getItem('ProbFaculty5') || 0.01);
    // const [probFaculty25, setProbFaculty25] = useState(localStorage.getItem('ProbFaculty25') || 0.06);
    // const [probFaculty50, setProbFaculty50] = useState(localStorage.getItem('ProbFaculty50') || 0.18);
    // const [probFaculty75, setProbFaculty75] = useState(localStorage.getItem('ProbFaculty75') || 0.54);
    // const [probFaculty95, setProbFaculty95] = useState(localStorage.getItem('ProbFaculty95') || 2.81);
    // const [probStudent5, setProbStudent5] = useState(localStorage.getItem('ProbStudent5') || 0.04);
    // const [probStudent25, setProbStudent25] = useState(localStorage.getItem('ProbStudent25') || 0.14);
    // const [probStudent50, setProbStudent50] = useState(localStorage.getItem('ProbStudent50') || 0.34);
    // const [probStudent75, setProbStudent75] = useState(localStorage.getItem('ProbStudent75') || 0.82);
    // const [probStudent95, setProbStudent95] = useState(localStorage.getItem('ProbStudent95') || 3.17);

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


    // const handlePercentFaculty = (percentFaculty) => {
    //     setPercentFaculty(percentFaculty);
    //     localStorage.setItem('PercentFaculty', percentFaculty);
    // };

    // const handlePercentStudent = (percentStudent) => {
    //     setPercentStudent(percentStudent);
    //     localStorage.setItem('PercentStudent', percentStudent);
    // };

    // const handleFaculty5 = (probFaculty5) => {
    //     setProbFaculty5(probFaculty5);
    //     localStorage.setItem('ProbFaculty5', probFaculty5);
    // };

    // const handleFaculty25 = (probFaculty25) => {
    //     setProbFaculty25(probFaculty25);
    //     localStorage.setItem('ProbFaculty25', probFaculty25);
    // };

    // const handleFaculty50 = (probFaculty50) => {
    //     setProbFaculty50(probFaculty50);
    //     localStorage.setItem('ProbFaculty50', probFaculty50);
    // };

    // const handleFaculty75 = (probFaculty75) => {
    //     setProbFaculty75(probFaculty75);
    //     localStorage.setItem('ProbFaculty75', probFaculty75);
    // };

    // const handleFaculty95 = (probFaculty95) => {
    //     setProbFaculty95(probFaculty95);
    //     localStorage.setItem('ProbFaculty95', probFaculty95);
    // };

    // const handleStudent5 = (probStudent5) => {
    //     setProbStudent5(probStudent5);
    //     localStorage.setItem('ProbStudent5', probStudent5);
    // };

    // const handleStudent25 = (probStudent25) => {
    //     setProbStudent25(probStudent25);
    //     localStorage.setItem('ProbStudent25', probStudent25);
    // };

    // const handleStudent50 = (probStudent50) => {
    //     setProbStudent50(probStudent50);
    //     localStorage.setItem('ProbStudent50', probStudent50);
    // };

    // const handleStudent75 = (probStudent75) => {
    //     setProbStudent75(probStudent75);
    //     localStorage.setItem('ProbStudent75', probStudent75);
    // };

    // const handleStudent95 = (probStudent95) => {
    //     setProbStudent95(probStudent95);
    //     localStorage.setItem('ProbStudent95', probStudent95);
    // };

    let result;

    async function fetchData() {
        const response = await fetch('/api/classroombasic', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await response.json();

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

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await fetch('/api/classroombasic', {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //         });
    //         result = await response.json();
 
    //         setPercentFaculty(result.percentFaculty);
    //         setPercentStudent(result.percentStudent);
    //         setProbFaculty5(result.probFaculty5);
    //         setProbFaculty25(result.probFaculty25);
    //         setProbFaculty50(result.probFaculty50);
    //         setProbFaculty75(result.probFaculty75);
    //         setProbFaculty95(result.probFaculty95);
    //         setProbStudent5(result.probStudent5);
    //         setProbStudent25(result.probStudent25);
    //         setProbStudent50(result.probStudent50);
    //         setProbStudent75(result.probStudent75);
    //         setProbStudent95(result.probStudent95);

            // handlePercentFaculty(result.percentFaculty);
            // handlePercentStudent(result.percentStudent);
            // handleFaculty5(result.probFaculty5);
            // handleFaculty25(result.probFaculty25);
            // handleFaculty50(result.probFaculty50);
            // handleFaculty75(result.probFaculty75);
            // handleFaculty95(result.probFaculty95);
            // handleStudent5(result.probStudent5);
            // handleStudent25(result.probStudent25);
            // handleStudent50(result.probStudent50);
            // handleStudent75(result.probStudent75);
            // handleStudent95(result.probStudent95);
        // }

    //     fetchData();
    // }, []);

    window.onload = function () {
        if (!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }
    }

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