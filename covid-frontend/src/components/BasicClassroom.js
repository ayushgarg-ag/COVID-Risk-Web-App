import React from 'react';
import './BasicClassroom.css';

function BasicClassroom(){
    var numFaculty;
    var numStudents;
    var numSessions;
    var durationSessions;
    var classFloorArea;
    var classHeight;
    function setNumFaculty(event) {
      numFaculty = event.target.value;
    }
    function setNumStudents(event) {
      numStudents = event.target.value;
    }
    function setNumSessions(event) {
      numSessions = event.target.value;
    }
    function setDurationSessions(event) {
      durationSessions = event.target.value;
    }
    function setClassFloorArea(event) {
      classFloorArea = event.target.value;
    }
    function setClassHeight(event) {
      classHeight = event.target.value;
    }
    function next() {
      var body = {
        numFaculty,
        numStudents,
        numSessions,
        durationSessions,
        classFloorArea,
        classHeight
      };
      // TODO: Somehow carry this data to the next page/function and send data to python backend
      console.log(body)
    }
    return(
        <div className="basic-classroom">
            <h2 className="title">STEP 1: CLASSROOM INFORMATION</h2>
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
                </tbody>
              </table>
            </form>
            <button className="btn btn-primary" onClick = {next}>Next</button>
        </div>
    )
}



export default BasicClassroom;
