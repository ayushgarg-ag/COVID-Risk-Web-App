import React, {useState} from 'react';
import './Classroom.css';
import { BsFillQuestionCircleFill } from "react-icons/bs";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import CustomSlider from './CustomSlider';

function renderPercentageInfectiousTooltip(props) {
  console.log(props)
  return <Tooltip {...props}>This depends on the state of the pandemic in a given region and time period, as well as the dynamics of the disease and its infectivity in different types of cases, which are not known very precisely.
  <a href="https://docs.google.com/spreadsheets/d/1LS2f28meUwiy-AxGQXyd1ily9HPbh9hvYD48Qulaj6s/edit#gid=0&range=A4" target="_blank" rel="noopener noreferrer">
    More information
  </a>
  </Tooltip>;
}

function renderMaskEfficiencyExhalationTooltip(props) {
  return <Tooltip {...props}>For the case where no masks are used, set mask efficiency to 0.
  <a href="https://docs.google.com/spreadsheets/d/1LS2f28meUwiy-AxGQXyd1ily9HPbh9hvYD48Qulaj6s/edit#gid=0&range=A30" target="_blank" rel="noopener noreferrer">
    More information
  </a>
  </Tooltip>;
}

function renderMaskEfficiencyInhalationTooltip(props) {
  return <Tooltip {...props}>For the case where no masks are used, set mask efficiency to 0.
  <a href="https://docs.google.com/spreadsheets/d/1LS2f28meUwiy-AxGQXyd1ily9HPbh9hvYD48Qulaj6s/edit#gid=0&range=A44" target="_blank" rel="noopener noreferrer">
    More information
  </a>
  </Tooltip>;
}

function renderRoomVentilationTooltip(props) {
  return <Tooltip {...props}> See link for literature values for several situations in h-1.
  <a href="https://docs.google.com/spreadsheets/d/1LS2f28meUwiy-AxGQXyd1ily9HPbh9hvYD48Qulaj6s/edit#gid=0&range=A51" target="_blank" rel="noopener noreferrer">
    More information
  </a>
  </Tooltip>;
}

function renderAddlControlMeasuresTooltip(props) {
  return <Tooltip {...props}> See link for virus removal rate due to additional control measures.
  <a href="https://docs.google.com/spreadsheets/d/1LS2f28meUwiy-AxGQXyd1ily9HPbh9hvYD48Qulaj6s/edit#gid=0&range=A66" target="_blank" rel="noopener noreferrer">
    More information
  </a>
  </Tooltip>;
}

function renderDecayRateTooltip(props) {
  return <Tooltip {...props}> See link for literature values in h-1.
  <a href="https://docs.google.com/spreadsheets/d/1LS2f28meUwiy-AxGQXyd1ily9HPbh9hvYD48Qulaj6s/edit#gid=0&range=A78" target="_blank" rel="noopener noreferrer">
    More information
  </a>
  </Tooltip>;
}

function renderDepositionRateTooltip(props) {
  return <Tooltip {...props}>An important uncertainty is the size range of the infective particles. Here we assume 1-5 um, based on our read of the literature.
  <a href="https://docs.google.com/spreadsheets/d/1LS2f28meUwiy-AxGQXyd1ily9HPbh9hvYD48Qulaj6s/edit#gid=0&range=A95" target="_blank" rel="noopener noreferrer">
    More information
  </a>
  </Tooltip>;
}

function renderFacultyInhalationRateTooltip(props) {
  return <Tooltip {...props}>Default values for faculty are mean percentile breathing rates for combination of passive and light activity for 41 to &lt51 years age-group.
  <a href="https://docs.google.com/spreadsheets/d/1LS2f28meUwiy-AxGQXyd1ily9HPbh9hvYD48Qulaj6s/edit#gid=0&range=A101" target="_blank" rel="noopener noreferrer">
    More information
  </a>
  </Tooltip>;
}

function renderStudentInhalationRateTooltip(props) {
  return <Tooltip {...props}>Default values for students are short-term mean-95th percentile breathing rates for passive activity for 16 to &lt21 years age-group.
  <a href="https://docs.google.com/spreadsheets/d/1LS2f28meUwiy-AxGQXyd1ily9HPbh9hvYD48Qulaj6s/edit#gid=0&range=A101" target="_blank" rel="noopener noreferrer">
    More information
  </a>
  </Tooltip>;
}

function renderQuantaEmissionTooltip(props) {
  return <Tooltip {...props}>
  <a href="https://docs.google.com/spreadsheets/d/1LS2f28meUwiy-AxGQXyd1ily9HPbh9hvYD48Qulaj6s/edit#gid=0&range=A107" target="_blank" rel="noopener noreferrer">
    More information
  </a>
  </Tooltip>;
}

function AdvancedClassroom(){
    const [body, setBody] = useState({
        numFaculty: localStorage.getItem("numFaculty") || 1,
        numStudents: localStorage.getItem("numStudents") || '',
        numSessions: localStorage.getItem("numSessions") || '',
        durationSessions: localStorage.getItem("durationSessions") || '',
        classFloorArea: localStorage.getItem("classFloorArea") || '',
        classHeight: localStorage.getItem("classHeight") || '',
        county: localStorage.getItem("county") || '',
        state: localStorage.getItem("state") || '',
        masks: localStorage.getItem("masks") || '1',
        facultyInfectious: [0.7,1.4],
        studentInfectious: [0.7,1.4],
        maskEffExhalation: [40,60],
        maskEffInhalation: [30,50],
        ventilationRate: [1,4],
        addlControl: [0,0],
        decayRate: [0,1.0],
        depositionRate: [0.3,1.5],
        facultyInhalation: [0.005,0.010],
        studentInhalation: [0.005,0.007],
        meanFacultyQuantaE: 1.5,
        sdFacultyQuantaE: 0.71,
        meanStudentQuantaE: 0.69,
        sdStudentQuantaE: 0.71
    });

    function changeBodyInfo(e) {
      setBody({...body, [e.target.className]:e.target.value})
      localStorage.setItem(e.target.className, e.target.value)
    }
    function changeLeft(e){
      var className = e.target.className
      setBody({...body, [className]:[parseFloat(e.target.value), body[className][1]]})
    }
    function changeRight(e){
      var className = e.target.className
      setBody({...body, [className]:[body[className][0], parseFloat(e.target.value)]})
    }
  async function calculate() {
    // var inputs = {
    //     'numFaculty': parseInt(body.numFaculty),
    //     'numStudents': parseInt(body.numStudents),
    //     'numSessions': parseInt(body.numSessions),
    //     'durationSessions': parseFloat(body.durationSessions),
    //     'classFloorArea': parseFloat(body.classFloorArea),
    //     'classHeight': parseFloat(body.classHeight),
    //     'county': body.country,
    //     'state': body.state,
    //     'facultyInfectious': [parseFloat(body.facultyInfectious[0]), parseFloat(body.facultyInfectious[1])],
    //     'studentInfectious': [parseFloat(body.studentInfectious[0]), parseFloat(body.studentInfectious[1])],
    //     'maskEffExhalation': [parseFloat(body.maskEffExhalation[0]), parseFloat(body.maskEffExhalation[1])],
    //     'maskEffInhalation': [parseFloat(body.maskEffInhalation[0]), parseFloat(body.maskEffInhalation[1])],
    //     'ventilationRate': [parseFloat(body.ventilationRate[0]), parseFloat(body.ventilationRate[1])],
    //     'addlControl': [parseFloat(body.addlControl[0]), parseFloat(body.addlControl[1])],
    //     'decayRate': [parseFloat(body.decayRate[0]), parseFloat(body.decayRate[1])],
    //     'depositionRate': [parseFloat(body.depositionRate[0]), parseFloat(body.depositionRate[1])],
    //     'facultyInhalation': [parseFloat(body.facultyInhalation[0]), parseFloat(body.facultyInhalation[1])],
    //     'studentInhalation': [parseFloat(body.studentInhalation[0]), parseFloat(body.studentInhalation[1])],
    //     'meanFacultyQuantaE': parseFloat(body.meanFacultyQuantaE),
    //     'sdFacultyQuantaE': parseFloat(body.sdFacultyQuantaE),
    //     'meanStudentQuantaE': parseFloat(body.meanStudentQuantaE),
    //     'sdStudentQuantaE': parseFloat(body.sdStudentQuantaE)
    // };

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
          <div className='basic-frame'>
              <div className='title-bar'>
                  <h1 className='title'>STEP 1: CLASSROOM PARAMETERS</h1>
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
                            <input type="radio" id="yes" name="masks" className="masks" value="1" onChange={changeBodyInfo} defaultChecked />
                            <label className="maskLabel" htmlFor="yes">Yes</label>
                            <input type="radio" id="no" name="masks" className="masks" value="0" onChange={changeBodyInfo} />
                            <label className="maskLabel" htmlFor="no">No</label>
                        </div>
                    </div>
                  <br/>
                </div>
            </div>
            <div className='advanced-frame'>
                <div className='title-bar'>
                    <h1 className='title'>STEP 2: VARIABLE INPUTS</h1>
                </div>
                <div className='box'>
                    <p className='directions'><strong>** The following are additional parameters that can be changed if a more detailed/custom calculation is desired **<br/><br/>These values are preset to default values and are not required to be modified for a simple basic calculation:</strong></p>
                    <div className='input-line'>
                        <p className='parameter-adv'>Percentage of faculty-age people in community who are infectious (%)</p>
                        <div className='question'>
                            <OverlayTrigger placement="right" delay={{ show: 250, hide: 5000 }} overlay={renderPercentageInfectiousTooltip}>
                                <BsFillQuestionCircleFill variant="success" />
                            </OverlayTrigger><br/>
                        </div>
                        <div className='slider-bar'>
                            <CustomSlider className="facultyInfectious" min='0' max='10' step_count='0.1' defaultLeft={body.facultyInfectious[0]} defaultRight={body.facultyInfectious[1]} changeLeft = {changeLeft} changeRight = {changeRight}/>
                        </div>
                    </div>
                    <div className='input-line'>
                        <p className='parameter-adv'>Percentage of student-age people in community who are infectious (%)</p>
                        <div className='question'>
                            <OverlayTrigger placement="right" delay={{ show: 250, hide: 5000 }} overlay={renderPercentageInfectiousTooltip}>
                                <BsFillQuestionCircleFill variant="success" />
                            </OverlayTrigger><br/>
                        </div>
                        <div className='slider-bar'>
                            <CustomSlider className="studentInfectious" min='0' max='10' step_count='0.1' defaultLeft={body.studentInfectious[0]} defaultRight={body.studentInfectious[1]} changeLeft = {changeLeft} changeRight = {changeRight}/>
                        </div>
                    </div>
                    <div className='input-line'>
                        <p className='parameter-adv'>Mask efficiency in reducing virus exhalation (%)</p>
                        <div className='question'>
                            <OverlayTrigger placement="right" delay={{ show: 250, hide: 2000 }} overlay={renderMaskEfficiencyExhalationTooltip}>
                                <BsFillQuestionCircleFill variant="success" />
                            </OverlayTrigger><br/>
                        </div>
                        <div className='slider-bar'>
                            <CustomSlider className="maskEffExhalation" min='0' max='100' step_count='1' defaultLeft={body.maskEffExhalation[0]} defaultRight={body.maskEffExhalation[1]} changeLeft = {changeLeft} changeRight = {changeRight}/>
                        </div>
                    </div>
                    <div className='input-line'>
                        <p className='parameter-adv'>Mask efficiency in reducing virus inhalation (%)</p>
                        <div className='question'>
                            <OverlayTrigger placement="right" delay={{ show: 250, hide: 2000 }} overlay={renderMaskEfficiencyInhalationTooltip}>
                                <BsFillQuestionCircleFill variant="success" />
                            </OverlayTrigger><br/>
                        </div>
                        <div className='slider-bar'>
                            <CustomSlider className="maskEffInhalation" min='0' max='100' step_count='1' defaultLeft={body.maskEffInhalation[0]} defaultRight={body.maskEffInhalation[1]} changeLeft = {changeLeft} changeRight = {changeRight}/>
                        </div>
                    </div>
                    <div className='input-line'>
                        <p className='parameter-adv'>Room air ventilation rate w/outside air (air changes per hour)</p>
                        <div className='question'>
                            <OverlayTrigger placement="right" delay={{ show: 250, hide: 2000 }} overlay={renderRoomVentilationTooltip}>
                                <BsFillQuestionCircleFill variant="success" />
                            </OverlayTrigger><br/>
                        </div>
                        <div className='slider-bar'>
                            <CustomSlider className="ventilationRate" min='0' max='10' step_count='1' defaultLeft={body.ventilationRate[0]} defaultRight={body.ventilationRate[1]} changeLeft = {changeLeft} changeRight = {changeRight}/>
                        </div>
                    </div>
                    <div className='input-line'>
                        <p className='parameter-adv'>Additional control measures (effective air changes per hour)</p>
                        <div className='question'>
                            <OverlayTrigger placement="right" delay={{ show: 250, hide: 2000 }} overlay={renderAddlControlMeasuresTooltip}>
                                <BsFillQuestionCircleFill variant="success" />
                            </OverlayTrigger><br/>
                        </div>
                        <div className='slider-bar'>
                            <CustomSlider className="addlControl" min='0' max='100' step_count='1' defaultLeft={body.addlControl[0]} defaultRight={body.addlControl[1]} changeLeft = {changeLeft} changeRight = {changeRight}/>
                        </div>
                    </div>
                    <div className='input-line'>
                        <p className='parameter-adv'>Decay rate of virus infectivity indoors (per hour)</p>
                        <div className='question'>
                            <OverlayTrigger placement="right" delay={{ show: 250, hide: 2500 }} overlay={renderDecayRateTooltip}>
                                <BsFillQuestionCircleFill variant="success" />
                            </OverlayTrigger><br/>
                        </div>
                        <div className='slider-bar'>
                            <CustomSlider className="decayRate" min='0' max='1' step_count='0.01' defaultLeft={body.decayRate[0]} defaultRight={body.decayRate[1]} changeLeft = {changeLeft} changeRight = {changeRight}/>
                        </div>
                    </div>
                    <div className='input-line'>
                        <p className='parameter-adv'>Deposition rate of virus to surfaces (per hour)</p>
                        <div className='question'>
                            <OverlayTrigger placement="right" delay={{ show: 250, hide: 3500 }} overlay={renderDepositionRateTooltip}>
                                <BsFillQuestionCircleFill variant="success" />
                            </OverlayTrigger><br/>
                        </div>
                        <div className='slider-bar'>
                            <CustomSlider className="depositionRate" min='0' max='1.5' step_count='0.1' defaultLeft={body.depositionRate[0]} defaultRight={body.depositionRate[1]} changeLeft = {changeLeft} changeRight = {changeRight}/>
                        </div>
                    </div>
                    <div className='input-line'>
                        <p className='parameter-adv'>Inhalation rate: Faculty (m³/minute)</p>
                        <div className='question'>
                            <OverlayTrigger placement="right" delay={{ show: 250, hide: 3500 }} overlay={renderFacultyInhalationRateTooltip}>
                                <BsFillQuestionCircleFill variant="success" />
                            </OverlayTrigger><br/>
                        </div>
                        <div className='slider-bar'>
                            <CustomSlider className="facultyInhalation" min='0.0' max='0.02' step_count='0.001' defaultLeft={body.facultyInhalation[0]} defaultRight={body.facultyInhalation[1]} changeLeft = {changeLeft} changeRight = {changeRight}/>
                        </div>
                    </div>
                    <div className='input-line'>
                        <p className='parameter-adv'>Inhalation rate: Student (m³/minute)</p>
                        <div className='question'>
                            <OverlayTrigger placement="right" delay={{ show: 250, hide: 3500 }} overlay={renderStudentInhalationRateTooltip}>
                                <BsFillQuestionCircleFill variant="success" />
                            </OverlayTrigger><br/>
                        </div>
                        <div className='slider-bar'>
                            <CustomSlider className="studentInhalation" min='0' max='0.02' step_count='0.001' defaultLeft={body.studentInhalation[0]} defaultRight={body.studentInhalation[1]} changeLeft = {changeLeft} changeRight = {changeRight}/>
                        </div>
                    </div>
                    <p className='directions'><strong>For the below variables, please click the links before specifying.</strong></p>
                    <div className='input-line'>
                        <p className='parameter-adv'>log10[Quanta emission rate: Faculty (quanta/hour)]</p>
                        <div className='question'>
                            <OverlayTrigger placement="right" delay={{ show: 250, hide: 800 }} overlay={renderQuantaEmissionTooltip}>
                                <BsFillQuestionCircleFill variant="success" />
                            </OverlayTrigger><br/>
                        </div>
                        <p className='parameter-basic'></p>
                        <input type = "number" className = "meanFacultyQuantaE" value = {body.meanFacultyQuantaE} onChange = {changeBodyInfo}/>
                        <input type = "number" className = "sdFacultyQuantaE" value = {body.sdFacultyQuantaE} onChange = {changeBodyInfo}/>
                    </div>
                    <div className='input-line'>
                        <p className='parameter-adv'>log10[Quanta emission rate: Student (quanta/hour)]</p>
                        <div className='question'>
                            <OverlayTrigger placement="right" delay={{ show: 250, hide: 800 }} overlay={renderQuantaEmissionTooltip}>
                                <BsFillQuestionCircleFill variant="success" />
                            </OverlayTrigger><br/>
                        </div>
                        <p className='parameter-basic'></p>
                        <input type = "number" className = "meanStudentQuantaE" value = {body.meanStudentQuantaE} onChange = {changeBodyInfo}/>
                        <input type = "number" className = "sdStudentQuantaE" value = {body.sdStudentQuantaE} onChange = {changeBodyInfo}/>
                    </div>
                    <br/>
                </div>
                <a className='button-holder' id='link' href="/results">
                    <button id="calc" className="calc-button" onClick={calculate}><strong>CALCULATE</strong></button>
                </a>  
            </div>
        </div>
    )
}

export default AdvancedClassroom;
