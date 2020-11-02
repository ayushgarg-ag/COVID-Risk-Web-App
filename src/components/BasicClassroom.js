import React, {useState} from 'react';
import './Classroom.css';
// import { BsFillQuestionCircleFill } from "react-icons/bs";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Tooltip from "react-bootstrap/Tooltip";

// function renderTooltip(props) {
//   return <Tooltip {...props}>Typical value for the general population, with a variety of types of masks and also variation on how well they are worn
//   </Tooltip>;
// }

function BasicClassroom(){
    const [body, setBody] = useState({
      numFaculty: 1,
      numStudents: '',
      numSessions: '',
      durationSessions: '',
      classFloorArea: '',
      classHeight: '',
      county: '',
      state: '',
      masks:'1'
    });

    function changeBodyInfo(e) {
      setBody({...body, [e.target.className]:e.target.value})
    }

    async function calculate() {
      var inputs = {
        'numFaculty': parseInt(body.numFaculty),
        'numStudents': parseInt(body.numStudents),
        'numSessions': parseInt(body.numSessions),
        'durationSessions': parseFloat(body.durationSessions),
        'classFloorArea': parseFloat(body.classFloorArea),
        'classHeight': parseFloat(body.classHeight),
        'county': body.county,
        'state': body.state,
        'masks': parseInt(body.masks)
      };

      const response = await fetch('/api/classroombasic', {
        body: JSON.stringify(inputs),
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
                    <input type = "number" className = "numFaculty" value = {body.numFaculty} onChange = {changeBodyInfo}/>
                  </td>
                </tr>
                <tr>
                  <td className = "label">
                    <p className = "label">Number of Students:</p>
                  </td>
                  <td>
                    <input type = "number" className = "numStudents" value = {body.numStudents} onChange = {changeBodyInfo}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className = "label">Number of In-Person Sessions:</p>
                  </td>
                  <td>
                    <input type = "number" className = "numSessions" value = {body.numSessions} onChange = {changeBodyInfo}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className = "label">Duration of In-Person Sessions (minutes):</p>
                  </td>
                  <td>
                    <input type = "number" className = "durationSessions" value = {body.durationSessions} onChange = {changeBodyInfo}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className = "label">Classroom Floor Area (sq. ft.):</p>
                  </td>
                  <td>
                    <input type = "number" className = "classFloorArea" value = {body.classFloorArea} onChange = {changeBodyInfo}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className = "label">Classroom Height (ft.)</p>
                  </td>
                  <td>
                    <input type = "number" className = "classHeight" value = {body.classHeight} onChange = {changeBodyInfo}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className = "label">County</p>
                  </td>
                  <td>
                    <input type = "text" className = "county" value = {body.county} onChange = {changeBodyInfo}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className = "label">State</p>
                  </td>
                  <td>
                    <input type = "text" className = "state" value = {body.state} onChange = {changeBodyInfo}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className = "label">Is everyone wearing masks?</p>
                  </td>
                  <td>
                    <input type="radio" id="yes" name="masks" className="masks" value="1" onChange = {changeBodyInfo} defaultChecked/>
                    <label className="maskLabel" htmlFor="yes">Yes</label>
                    <input type="radio" id="no" name="masks" className="masks" value="0" onChange = {changeBodyInfo}/>
                    <label className="maskLabel" htmlFor="no">No</label>
                  </td>
                </tr>
              </tbody>
            </table>
            </form>
            <a href='results'>
                <button className="btn btn-primary" onClick = {calculate}>CALCULATE</button>
            </a>
        </div>
    )
}


export default BasicClassroom;
