import React, {useEffect, useState} from 'react';
import './BasicClassroom.css';
// import BasicClassroomInfo from './BasicClassroomInfo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function BasicClassroomLocation(next, {navigation}){
    const [body, setBody] = useState({
      numFaculty: next.numFaculty || '',
      numStudents: next.numStudents || '',
      numSessions: next.numSessions || '',
      durationSessions: next.durationSessions || '',
      classFloorArea: next.classFloorArea || '',
      classHeight: next.classHeight || '',
      county: next.classHeight || '',
      state: next.classHeight || ''
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
      'county': body.country,
      'state': body.state
    };

    // // TODO: Somehow carry this data to the next page/function and send data to python backend
    // console.log(body);

    // const response = await fetch('/api/classroombasic', {
    //   body: JSON.stringify(inputs), // body data type must match "Content-Type" header
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    // });
    // const result = await response.json();
    // console.log(result);
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
                  {/* I think prof said that for the basic we should just have 1 step so I combined both pages */}
                </tbody>
              </table>
            </form>
                <button className="btn btn-primary" onClick = {navigation.navigate('basic-classroom-location', {body})}>CALCULATE</button>

        </div>
    );
}


export default BasicClassroomLocation;
