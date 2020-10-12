import React from 'react';
import './BasicClassroom.css';
import { BsFillQuestionCircleFill } from "react-icons/bs";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function renderTooltip(props) {
  return <Tooltip {...props}>Typical value for the general population, with a variety of types of masks and also variation on how well they are worn
  </Tooltip>;
}

function BasicClassroom(){

    var numFaculty = 1;
    var numStudents;
    var numSessions;
    var durationSessions;
    var classFloorArea;
    var classHeight;
    var zipCode;
    var facultyInfectious;
    var studentInfectious;
    var maskEfficiency = 30;

    function setNumFaculty(event) {
      numFaculty = parseInt(event.target.value);
    }
    function setNumStudents(event) {
      numStudents = parseInt(event.target.value);
    }
    function setNumSessions(event) {
      numSessions = parseInt(event.target.value);
    }
    function setDurationSessions(event) {
      durationSessions = parseInt(event.target.value);
    }
    function setClassFloorArea(event) {
      classFloorArea = parseFloat(event.target.value);
    }
    function setClassHeight(event) {
      classHeight = parseFloat(event.target.value);
    }
    function setZipCode(event) {
      zipCode = event.target.value;
    }
    function setStudentInfectious(event) {
      facultyInfectious = parseFloat(event.target.value);
    }
    function setFacultyInfectious(event) {
      studentInfectious = parseFloat(event.target.value);
    }
    function setMaskEfficiency(event) {
      maskEfficiency = parseFloat(event.target.value);
    }
  async function calculate() {
    var body = {
      'numFaculty': numFaculty,
      'numStudents': numStudents,
      'numSessions': numSessions,
      'durationSessions': durationSessions,
      'classFloorArea': classFloorArea,
      'classHeight': classHeight,
      'zipCode': zipCode,
      'facultyInfectious': facultyInfectious,
      'studentInfectious': studentInfectious,
      'maskEfficiency': maskEfficiency
    };

    // // TODO: Somehow carry this data to the next page/function and send data to python backend
    // console.log(body);

    const response = await fetch('/api/classroombasic', {
      body: JSON.stringify(body), // body data type must match "Content-Type" header
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const result = await response.json();
    console.log(result);
    }
    return(
        <div className="left-layout">
            <h2 className="title">CLASSROOM CALCULATION</h2>
            <p className="desc">Please input the appropriate values in the input boxes below.</p>
            <form>
              <table className="inputs">
                <tbody>
                  <tr>
                    <td>
                      <p className = "label">Number of Faculty:</p>
                    </td>
                    <td>
                      <input type = "number" className = "num-faculty" value = {numFaculty} onChange = {setNumFaculty}/>
                    </td>
                  </tr>
                  <tr>
                    <td className = "label">
                      <p className = "label">Number of Students:</p>
                    </td>
                    <td>
                      <input type = "number" className = "num-students" value = {numStudents} onChange = {setNumStudents}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className = "label">Number of In-Person Sessions:</p>
                    </td>
                    <td>
                      <input type = "number" className = "num-sessions" value = {numSessions} onChange = {setNumSessions}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className = "label">Duration of In-Person Sessions (minutes):</p>
                    </td>
                    <td>
                      <input type = "number" className = "duration-sessions" value = {durationSessions} onChange = {setDurationSessions}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className = "label">Classroom Floor Area (sq. ft.):</p>
                    </td>
                    <td>
                      <input type = "number" className = "class-floor-area" value = {classFloorArea} onChange = {setClassFloorArea}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className = "label">Classroom Height (ft.)</p>
                    </td>
                    <td>
                      <input type = "number" className = "class-height" value = {classHeight} onChange = {setClassHeight}/>
                    </td>
                  </tr>
                  {/* I think prof said that for the basic we should just have 1 step so I combined both pages */}
                  <tr>
                    <td>
                      <p className = "label">Zip Code (optional)</p>
                    </td>
                    <td>
                      <input type = "number" className = "zip-code" value = {zipCode} onChange = {setZipCode}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className = "label">% Infectious Faculty in Community</p>
                    </td>
                    <td>
                      <input type = "number" className = "faculty-infectious" value = {facultyInfectious} onChange = {setFacultyInfectious}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className = "label">% Infectious Student in Community</p>
                    </td>
                    <td>
                      <input type = "number" className = "student-infectious" value = {studentInfectious} onChange = {setStudentInfectious}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {/* We can add the slider bar later, this is temp */}
                      <p className = "label">Mask Efficiency in Reducing Virus Exhalation (%) <OverlayTrigger 
                          placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                          <BsFillQuestionCircleFill variant="success" />
                        </OverlayTrigger>
                      </p>
                    </td>
                    <td>
                      <input type = "number" className = "mask-effiency" value = {maskEfficiency} onChange = {setMaskEfficiency}/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
            <a href="/results">
                <button className="btn btn-primary" onClick = {calculate}>CALCULATE</button>
            </a>
        </div>
    )
}


export default BasicClassroom;
