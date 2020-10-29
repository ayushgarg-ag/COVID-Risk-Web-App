import React from 'react';
import './AdvancedClassroom.css';
import { BsFillQuestionCircleFill } from "react-icons/bs";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function renderTooltip(props) {
  return <Tooltip {...props}>Typical value for the general population, with a variety of types of masks and also variation on how well they are worn
  </Tooltip>;
}

function AdvancedClassroom(){
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


    function slider1(event) {
      var slidecontainer = document.getElementById("myRange1");
      var output = document.getElementById("demo1");
      output.innerHTML = slidecontainer.value;
      slidecontainer.onInput = function() {
        output.innerHTML = this.value;
      }
    }

    function slider2(event) {
      var slidecontainer = document.getElementById("myRange2");
      var output = document.getElementById("demo2");
      output.innerHTML = slidecontainer.value;
      slidecontainer.onInput = function() {
        output.innerHTML = this.value;
      }
    }

    function slider3(event) {
      var slidecontainer = document.getElementById("myRange3");
      var output = document.getElementById("demo3");
      output.innerHTML = slidecontainer.value;
      slidecontainer.onInput = function() {
        output.innerHTML = this.value;
      }
    }

    function slider4(event) {
      var slidecontainer = document.getElementById("myRange4");
      var output = document.getElementById("demo4");
      output.innerHTML = slidecontainer.value;
      slidecontainer.onInput = function() {
        output.innerHTML = this.value;
      }
    }

    function slider5(event) {
      var slidecontainer = document.getElementById("myRange5");
      var output = document.getElementById("demo5");
      output.innerHTML = slidecontainer.value;
      slidecontainer.onInput = function() {
        output.innerHTML = this.value;
      }
    }

    function slider6(event) {
      var slidecontainer = document.getElementById("myRange6");
      var output = document.getElementById("demo6");
      output.innerHTML = slidecontainer.value;
      slidecontainer.onInput = function() {
        output.innerHTML = this.value;
      }
    }

    function slider7(event) {
      var slidecontainer = document.getElementById("myRange7");
      var output = document.getElementById("demo7");
      output.innerHTML = slidecontainer.value;
      slidecontainer.onInput = function() {
        output.innerHTML = this.value;
      }
    }

    function slider8(event) {
      var slidecontainer = document.getElementById("myRange8");
      var output = document.getElementById("demo8");
      output.innerHTML = slidecontainer.value;
      slidecontainer.onInput = function() {
        output.innerHTML = this.value;
      }
    }

    function slider9(event) {
      var slidecontainer = document.getElementById("myRange9");
      var output = document.getElementById("demo9");
      output.innerHTML = slidecontainer.value;
      slidecontainer.onInput = function() {
        output.innerHTML = this.value;
      }
    }

    function setZipCode(event) {
      zipCode = event.target.value;
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

    const response = await fetch('/api/classroomadvanced', {
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
                  <div className = "slidecontainer">
                  <tr>
                    <td>
                      <p className = "label">Number of Faculty:</p>
                    </td>
                    <td>
                      <input type = "range" className = "slider" min = "0" max = "100" id = "myRange1" onInput = {slider1}/>
                      <p> Value: <span id="demo1"></span></p>
                    </td>
                  </tr>
                  </div>
                  <div className = "slidecontainer">
                  <tr>
                    <td>
                      <p className = "label">Number of Students:</p>
                    </td>
                    <td>
                      <input type = "range" className = "slider" min = "0" max = "100" id = "myRange2" onInput = {slider2}/>
                      <p> Value: <span id="demo2"></span></p>
                    </td>
                  </tr>
                  </div>
                  <div className = "slidecontainer">
                  <tr>
                    <td>
                      <p className = "label">Number of In-Person Sessions:</p>
                    </td>
                    <td>
                      <input type = "range" className = "slider" min = "0" max = "100" id = "myRange3" onInput = {slider3}/>
                      <p> Value: <span id="demo3"></span></p>
                    </td>
                  </tr>
                  </div>
                  <div className = "slidecontainer">
                  <tr>
                    <td>
                      <p className = "label">Duration of In-Person Sessions (minutes):</p>
                    </td>
                    <td>
                      <input type = "range" className = "slider" min = "0" max = "100" id = "myRange4" onInput = {slider4}/>
                      <p> Value: <span id="demo4"></span></p>
                    </td>
                  </tr>
                  </div>
                  <div className = "slidecontainer">
                  <tr>
                    <td>
                      <p className = "label">Classroom Floor Area (sq. ft.):</p>
                    </td>
                    <td>
                      <input type = "range" className = "slider" min = "0" max = "100" id = "myRange5" onInput = {slider5}/>
                      <p> Value: <span id="demo5"></span></p>
                    </td>
                  </tr>
                  </div>
                  <div className = "slidecontainer">
                  <tr>
                    <td>
                      <p className = "label">Classroom Height (ft.):</p>
                    </td>
                    <td>
                      <input type = "range" className = "slider" min = "0" max = "100" id = "myRange6" onInput = {slider6}/>
                      <p> Value: <span id="demo6"></span></p>
                    </td>
                  </tr>
                  </div>
                  {/* I think prof said that for the basic we should just have 1 step so I combined both pages */}
                  <tr>
                    <td>
                      <p className = "label">Zip Code (optional)</p>
                    </td>
                    <td>
                      <input type = "number" className = "zip-code" value = {zipCode} onChange = {setZipCode}/>
                    </td>
                  </tr>
                  <div className = "slidecontainer">
                  <tr>
                    <td>
                      <p className = "label">% Infectious Faculty in Community:</p>
                    </td>
                    <td>
                      <input type = "range" className = "slider" min = "0" max = "100" id = "myRange7" onInput = {slider7}/>
                      <p> Value: <span id="demo7"></span></p>
                    </td>
                  </tr>
                  </div>
                  <div className = "slidecontainer">
                  <tr>
                    <td>
                      <p className = "label">% Infectious Student in Community:</p>
                    </td>
                    <td>
                      <input type = "range" className = "slider" min = "0" max = "100" id = "myRange8" onInput = {slider8}/>
                      <p> Value: <span id="demo8"></span></p>
                    </td>
                  </tr>
                  </div>
                    <div className = "slidecontainer">
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
                    <input type = "range" className = "slider" min = "0" max = "100" id = "myRange9" onInput = {slider9}/>
                    <p> Value: <span id="demo9"></span></p>
                    </td>
                  </tr>
                  </div>
                </tbody>
              </table>
            </form>
            <a href="/results">
                <button className="btn btn-primary" onClick = {calculate}>CALCULATE</button>
            </a>
        </div>
    )
}


export default AdvancedClassroom;
