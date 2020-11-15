import React, { useState, useEffect } from 'react';
import './Results.css';
import { useInterval } from "./useInterval";


function Results(){
    const [loading, setLoading] = useState(true);
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
    const [facultyInfectiousLow, setFacultyInfectiousLow] = useState(.7);
    const [facultyInfectiousHigh, setFacultyInfectiousHigh] = useState(1.4);
    const [studentInfectiousLow, setStudentInfectiousLow] = useState(.7);
    const [studentInfectiousHigh, setStudentInfectiousHigh] = useState(1.4);

    const parseValue = (value) => {
        return parseFloat(value).toFixed(2);
    }

    // const [result, setResult] = useState({});

    // useInterval(async () => {
    //     console.log("Checking if new data has arrived");
    //     const response = await fetch('/api/classroombasic', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     });
    //     var res = await response.json();
    //     setResult(res);
    //     loadData(res);
    // }, 1000);

    // const loadData = async (result) => {
    //     setLoading(true);

    //     console.log(result);

    //     setPercentFaculty(parseValue(result.percentFaculty));
    //     setPercentStudent(parseValue(result.percentStudent));
    //     setProbFaculty5(parseValue(result.probFaculty5));
    //     setProbFaculty25(parseValue(result.probFaculty25));
    //     setProbFaculty50(parseValue(result.probFaculty50));
    //     setProbFaculty75(parseValue(result.probFaculty75));
    //     setProbFaculty95(parseValue(result.probFaculty95));
    //     setProbStudent5(parseValue(result.probStudent5));
    //     setProbStudent25(parseValue(result.probStudent25));
    //     setProbStudent50(parseValue(result.probStudent50));
    //     setProbStudent75(parseValue(result.probStudent75));
    //     setProbStudent95(parseValue(result.probStudent95));

    //     setLoading(false);
    // };


    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('/api/classroombasic', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            var result = await response.json();
            console.log(result);

            setPercentFaculty(parseValue(result.percentFaculty));
            setPercentStudent(parseValue(result.percentStudent));
            setProbFaculty5(parseValue(result.probFaculty5));
            setProbFaculty25(parseValue(result.probFaculty25));
            setProbFaculty50(parseValue(result.probFaculty50));
            setProbFaculty75(parseValue(result.probFaculty75));
            setProbFaculty95(parseValue(result.probFaculty95));
            setProbStudent5(parseValue(result.probStudent5));
            setProbStudent25(parseValue(result.probStudent25));
            setProbStudent50(parseValue(result.probStudent50));
            setProbStudent75(parseValue(result.probStudent75));
            setProbStudent95(parseValue(result.probStudent95));
            setFacultyInfectiousLow(parseFloat(result.facultyInfectious[0]).toFixed(4));
            setFacultyInfectiousHigh(parseFloat(result.facultyInfectious[1]).toFixed(4));
            setStudentInfectiousLow(parseFloat(result.studentInfectious[0]).toFixed(4));
            setStudentInfectiousHigh(parseFloat(result.studentInfectious[1]).toFixed(4));

            setLoading(false);
        };
        loadData();
    }, []);

    if (loading) {
        return(
            <div>LOADING...</div>
        )
    }
    else {
        return(
            
            <nav className="results">
                <div className="info-container">
                    <div className="infobar">
                        <h1 className="best-estimate">{percentFaculty}%</h1>
                        <div className="infobox">
                            <h1 className="info-title">FACULTY</h1>
                            <p className="info-p">The faculty infectious rate in the specified community is {facultyInfectiousLow}% and {facultyInfectiousHigh}%</p>
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
                            <p className="info-p">The student infectious rate in the specified community is between {studentInfectiousLow}% and {studentInfectiousHigh}%</p>
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
                <a className='button-holder' id='link' href="/calculate-home">
                    <button className="update-button"><strong>Update Calculation</strong></button>
                </a>      
            </nav>
        )
    }
}

export default Results;