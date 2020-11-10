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
          <div className='basic-frame'>
              <div className='title-bar'>
                  <h1 className='title'>BASIC CALCULATION</h1>
              </div>
              <div className='box'>
                  <p className='directions'><strong>Please enter the following parameters:</strong></p>
                  <div className='input-line'>
                      <p className='parameter-basic'>Number of faculty?</p>
                      <input type = "number" className = "numFaculty" value = {body.numFaculty} onChange = {changeBodyInfo}/>
                  </div>
                  <div className='input-line'>
                      <p className='parameter-basic'>Number of students?</p>
                      <input type = "number" className = "numStudents" value = {body.numStudents} onChange = {changeBodyInfo}/>
                  </div>
                  <div className='input-line'>
                      <p className='parameter-basic'>Number of in-person sessions?</p>
                      <input type = "number" className = "numSessions" value = {body.numSessions} onChange = {changeBodyInfo}/>
                  </div>
                  <div className='input-line'>
                      <p className='parameter-basic'>Duration of in-person sessions (min)?</p>
                      <input type = "number" className = "durationSessions" value = {body.durationSessions} onChange = {changeBodyInfo}/>
                  </div>
                  <div className='input-line'>
                      <p className='parameter-basic'>Classroom floor area (sq. ft)?</p>
                      <input type = "number" className = "classFloorArea" value = {body.classFloorArea} onChange = {changeBodyInfo}/>
                  </div>
                  <div className='input-line'>
                      <p className='parameter-basic'>Classroom Height (ft)?</p>
                      <input type = "number" className = "classHeight" value = {body.classHeight} onChange = {changeBodyInfo}/>
                  </div>
                  <div className='input-line'>
                      <p className='parameter-basic'>County</p>
                      <input type = "text" className = "county" value = {body.county} onChange = {changeBodyInfo}/>
                  </div>
                  <div className='input-line'>
                      <p className='parameter-basic'>State</p>
                      <input type = "text" className = "state" value = {body.state} onChange = {changeBodyInfo}/>
                  </div>
                  <div className='input-line'>
                    <div>
                      <p className='parameter-basic'>Is everyone wearing masks?</p>
                    </div>
                    <div>
                      <input type="radio" id="yes" name="masks" className="masks" value="1" onChange = {changeBodyInfo} defaultChecked/>
                      <label className="maskLabel" htmlFor="yes">Yes</label>
                      <input type="radio" id="no" name="masks" className="masks" value="0" onChange = {changeBodyInfo}/>
                      <label className="maskLabel" htmlFor="no">No</label>
                    </div>
                  </div>
                  <br/>
                </div>
                <a className='button-holder' id='link' href="/results">
                    <button id="calc" className="calc-button" onClick = {calculate}><strong>CALCULATE</strong></button>
                </a>                
            </div>
        </div>
    )
}


export default BasicClassroom;
