import React, {useState} from 'react';
import './CalculateClassroom.css';
import { BsFillQuestionCircleFill } from "react-icons/bs";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import CustomSlider from './CustomSlider';

function renderPercentageInfectiousTooltip(props) {
  return <Tooltip {...props}>This depends on the state of the pandemic in a given region and time period, as well as the dynamics of the disease and its infectivity in different types of cases, which are not known very precisely. 
  <a href="https://docs.google.com/spreadsheets/d/1LS2f28meUwiy-AxGQXyd1ily9HPbh9hvYD48Qulaj6s/edit#gid=0&range=A4" target="_blank">
    More information
  </a>
  </Tooltip>;
}

function renderMaskEfficiencyExhalationTooltip(props) {
  return <Tooltip {...props}>For the case where no masks are used, set mask efficiency to 0.
  <a href="https://docs.google.com/spreadsheets/d/1LS2f28meUwiy-AxGQXyd1ily9HPbh9hvYD48Qulaj6s/edit#gid=0&range=A30" target="_blank">
    More information
  </a>
  </Tooltip>;
}

function renderMaskEfficiencyInhalationTooltip(props) {
  return <Tooltip {...props}>For the case where no masks are used, set mask efficiency to 0.
  <a href="https://docs.google.com/spreadsheets/d/1LS2f28meUwiy-AxGQXyd1ily9HPbh9hvYD48Qulaj6s/edit#gid=0&range=A44" target="_blank">
    More information
  </a>
  </Tooltip>;
}

function renderRoomVentilationTooltip(props) {
  return <Tooltip {...props}> See link for literature values for several situations in h-1.
  <a href="https://docs.google.com/spreadsheets/d/1LS2f28meUwiy-AxGQXyd1ily9HPbh9hvYD48Qulaj6s/edit#gid=0&range=A51" target="_blank">
    More information
  </a>
  </Tooltip>;
}

function renderAddlControlMeasuresTooltip(props) {
  return <Tooltip {...props}> See link for virus removal rate due to additional control measures.
  <a href="https://docs.google.com/spreadsheets/d/1LS2f28meUwiy-AxGQXyd1ily9HPbh9hvYD48Qulaj6s/edit#gid=0&range=A66" target="_blank">
    More information
  </a>
  </Tooltip>;
}

function renderDecayRateTooltip(props) {
  return <Tooltip {...props}> See link for literature values in h-1.
  <a href="https://docs.google.com/spreadsheets/d/1LS2f28meUwiy-AxGQXyd1ily9HPbh9hvYD48Qulaj6s/edit#gid=0&range=A78" target="_blank">
    More information
  </a>
  </Tooltip>;
}

function renderDepositionRateTooltip(props) {
  return <Tooltip {...props}>An important uncertainty is the size range of the infective particles. Here we assume 1-5 um, based on our read of the literature. 
  <a href="https://docs.google.com/spreadsheets/d/1LS2f28meUwiy-AxGQXyd1ily9HPbh9hvYD48Qulaj6s/edit#gid=0&range=A95" target="_blank">
    More information
  </a>
  </Tooltip>;
}

function renderFacultyInhalationRateTooltip(props) {
  return <Tooltip {...props}>Default values for faculty are mean percentile breathing rates for combination of passive and light activity for 41 to &lt51 years age-group.
  <a href="https://docs.google.com/spreadsheets/d/1LS2f28meUwiy-AxGQXyd1ily9HPbh9hvYD48Qulaj6s/edit#gid=0&range=A101" target="_blank">
    More information
  </a>
  </Tooltip>;
}

function renderStudentInhalationRateTooltip(props) {
  return <Tooltip {...props}>Default values for students are short-term mean-95th percentile breathing rates for passive activity for 16 to &lt21 years age-group.
  <a href="https://docs.google.com/spreadsheets/d/1LS2f28meUwiy-AxGQXyd1ily9HPbh9hvYD48Qulaj6s/edit#gid=0&range=A101" target="_blank">
    More information
  </a>
  </Tooltip>;
}

function renderQuantaEmissionTooltip(props) {
  return <Tooltip {...props}>
  <a href="https://docs.google.com/spreadsheets/d/1LS2f28meUwiy-AxGQXyd1ily9HPbh9hvYD48Qulaj6s/edit#gid=0&range=A107" target="_blank">
    More information
  </a>
  </Tooltip>;
}

function AdvancedClassroom(){
    const [body, setBody] = useState({
      numFaculty: 1,
      numStudents: '',
      numSessions: '',
      durationSessions: '',
      classFloorArea: '',
      classHeight: '',
      county: '',
      state: '',
      minFacultyInfectious: '',
      maxFacultyInfectioous: '',
      minStudentInfectious: '',
      maxStudentInfection: '',
      minMaskEffExhalation: '',
      maxMaskEffExhalation: '',
      minMaskEffInhalation: '',
      maxMaskEffInhalation: '',
      minVentilationRate: '',
      maxVentilationRate: '',
      minAddlControl: '',
      maxAddlControl: '',
      minDecayRate: '',
      maxDecayRate: '',
      minDepositionRate: '',
      maxDepositionRate: '',
      minFacultyInhalation: '',
      maxFacultyInhalation: '',
      minStudentInhalation: '',
      maxStudentInhalation: '',
      meanFacultyQuantaE: '',
      sdFacultyQuantaE: '',
      meanStudentQuantaE: '',
      sdStudentQuantaE: ''
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
      'state': body.state,
      'minFacultyInfectious' : parseFloat(body.minFacultyInfectious),
      'maxFacultyInfectioous': parseFloat(body.maxFacultyInfectioous),
      'minStudentInfectious': parseFloat(body.minStudentInfectious),
      'maxStudentInfection': parseFloat(body.maxStudentInfection),
      'minMaskEffExhalation': parseFloat(body.minMaskEffExhalation),
      'maxMaskEffExhalation': parseFloat(body.maxMaskEffExhalation),
      'minMaskEffInhalation': parseFloat(body.minMaskEffInhalation),
      'maxMaskEffInhalation': parseFloat(body.maxMaskEffInhalation),
      'minVentilationRate': parseFloat(body.minVentilationRate),
      'maxVentilationRate': parseFloat(body.maxVentilationRate),
      'minAddlControl': parseFloat(body.minAddlControl),
      'maxAddlControl': parseFloat(body.maxAddlControl),
      'minDecayRate': parseFloat(body.minDecayRate),
      'maxDecayRate': parseFloat(body.maxDecayRate),
      'minDepositionRate': parseFloat(body.minDepositionRate),
      'maxDepositionRate': parseFloat(body.maxDepositionRate),
      'minFacultyInhalation': parseFloat(body.minFacultyInhalation),
      'maxFacultyInhalation': parseFloat(body.maxFacultyInhalation),
      'minStudentInhalation': parseFloat(body.minStudentInhalation),
      'maxStudentInhalation': parseFloat(body.maxStudentInhalation),
      'meanFacultyQuantaE': parseFloat(body.meanFacultyQuantaE),
      'sdFacultyQuantaE': parseFloat(body.sdFacultyQuantaE),
      'meanStudentQuantaE': parseFloat(body.meanStudentQuantaE),
      'sdStudentQuantaE': parseFloat(body.sdStudentQuantaE)
    };

    // // TODO: Somehow carry this data to the next page/function and send data to python backend
    // console.log(body);

    const response = await fetch('/api/classroombasic', {
      body: JSON.stringify(inputs), // body data type must match "Content-Type" header
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const result = await response.json();
    console.log(result);
    }

    return(
        <div className='page'>
            <div className='basic-frame'>
                <div className='title-bar'>
                    <h1 className='title'>1. BASIC PARAMETERS</h1>
                </div>
                <div className='box'>
                    <p className='directions'><strong>Please enter the following parameters:</strong></p>
                    <div className='input-line'>
                        <p className='parameter'>Number of faculty?</p>
                        <input type = "number" className = "numFaculty" value = {body.numFaculty} onChange = {changeBodyInfo}/>
                    </div>
                    <div className='input-line'>
                        <p className='parameter'>Number of students?</p>
                        <input type = "number" className = "numStudents" value = {body.numStudents} onChange = {changeBodyInfo}/>
                    </div>
                    <div className='input-line'>
                        <p className='parameter'>Number of in-person sessions?</p>
                        <input type = "number" className = "numSessions" value = {body.numSessions} onChange = {changeBodyInfo}/>
                    </div>
                    <div className='input-line'>
                        <p className='parameter'>Duration of in-person sessions (min)?</p>
                        <input type = "number" className = "durationSessions" value = {body.durationSessions} onChange = {changeBodyInfo}/>
                    </div>
                    <div className='input-line'>
                        <p className='parameter'>Classroom floor area (sq. ft)?</p>
                        <input type = "number" className = "classFloorArea" value = {body.classFloorArea} onChange = {changeBodyInfo}/>
                    </div>
                    <div className='input-line'>
                        <p className='parameter'>Classroom Height (ft)?</p>
                        <input type = "number" className = "classHeight" value = {body.classHeight} onChange = {changeBodyInfo}/>
                    </div>
                    <div className='input-line'>
                        <p className='parameter'>County</p>
                        <input type = "text" className = "county" value = {body.county} onChange = {changeBodyInfo}/>
                    </div>
                    <div className='input-line'>
                        <p className='parameter'>State</p>
                        <input type = "text" className = "state" value = {body.state} onChange = {changeBodyInfo}/>
                    </div>
                    <br/>
                </div>
            </div>
            <a href="/results">
                <button className="btn btn-primary" onClick = {calculate}>CALCULATE</button>
            </a>
            <div className='advanced-frame'>

            </div>
        </div>
    )
}


export default AdvancedClassroom;
