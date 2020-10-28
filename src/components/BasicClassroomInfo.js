import React, { useEffect, useState } from 'react';
import './BasicClassroom.css';


function BasicClassroomInfo({ route, navigation }){
  console.log(navigation)
  const [body, setBody] = useState({
    // numFaculty: previous.numFaculty || '',
    // numStudents: previous.numStudents || '',
    // numSessions: previous.numSessions || '',
    // durationSessions: previous.durationSessions || '',
    // classFloorArea: previous.classFloorArea || '',
    // classHeight: previous.classHeight || '',
    // county: previous.classHeight || '',
    // state: previous.classHeight || ''
  });

  function changeBodyInfo(e) {
    // setBody({...body, [e.target.className]:e.target.value})
  }
  async function calculate() {

    }
    return (
      <div className="left-layout">
          <h2 className="title">CLASSROOM CALCULATION</h2>
          <p className="desc">Please input the appropriate values in the input boxes below.</p>
          <form>
            <table className="inputs">
              <tbody>
                <tr>
                  <td>
                    <p className = "label">County:</p>
                  </td>
                  <td>
                    <input type = "text" className = "county" value = {body.county} onChange = {changeBodyInfo}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className = "label">State:</p>
                  </td>
                  <td>
                    <input type = "text" className = "state" value = {body.state} onChange = {changeBodyInfo}/>
                  </td>
                </tr>
                {/* I think prof said that for the basic we should just have 1 step so I combined both pages */}
              </tbody>
            </table>
          </form>
              <button className="btn btn-primary" onClick = {calculate}>CALCULATE</button>

      </div>
    )
  }



export default BasicClassroomInfo;
