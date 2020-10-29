import React from 'react';
import '../App.css';
import './CalculateHome.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function renderBasicTooltip(props) {
    return <Tooltip {...props}>The basic assessment is best for...</Tooltip>;
}
function renderAdvancedTooltip(props) {
    return <Tooltip {...props}>The advanced assessment is best for...</Tooltip>;
}

export default class CalculateHome extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isLocationSelected: false,
            isClassroomSelected: false,
            isDiningSelected: false,
            isCommonRoomSelected: false
        };

        this.setLocationSelected = this.setLocationSelected.bind(this);
        this.setClassroomSelected = this.setClassroomSelected.bind(this);
        this.setDiningSelected = this.setDiningSelected.bind(this);
        this.setCommonRoomSelected = this.setCommonRoomSelected.bind(this);
    }

    setLocationSelected(event) {
        this.setState({isLocationSelected: true})
    }
    setClassroomSelected(event) {
        this.setState({isLocationSelected: true})
        this.setState({isClassroomSelected: true})
    }
    setDiningSelected(event) {
        this.setState({isLocationSelected: true})
        this.setState({isDiningSelected: true})
    }
    setCommonRoomSelected(event) {
        this.setState({isLocationSelected: true})
        this.setState({isCommonRoomSelected: true})
    }


    render() {
        const isLocationSelected = this.state.isLocationSelected;
        const isClassroomSelected = this.state.isClassroomSelected;
        const isDiningSelected = this.state.isDiningSelected;
        const isCommonRoomSelected = this.state.isCommonRoomSelected;
        let divHeader;
        let divBody;

        if (isLocationSelected) {
            divHeader = 
            <nav className="centered-layout">
                <h2 className="title">EXPOSURE CALCULATION</h2>
                <p className="desc">
                    What kind of Assessment?
                </p>
            </nav>
            if (isClassroomSelected) {
                divBody = 
                <nav>
                    <a href="/basic-classroom">
                        <button className="btn btn-primary">BASIC</button>
                    </a>
                    <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderBasicTooltip}>
                    <BsFillQuestionCircleFill variant="success" />
                    </OverlayTrigger>
                    <a href="/advanced-classroom">
                        <button className="btn btn-primary">ADVANCED</button>
                    </a>
                    <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderAdvancedTooltip}>
                    <BsFillQuestionCircleFill variant="success" />
                    </OverlayTrigger>
                </nav>
            }
            else if (isDiningSelected) {
                divBody = 
                <nav>
                    <a href="/basic-dining">
                        <button className="btn btn-primary">BASIC</button>
                    </a>
                    <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderBasicTooltip}>
                    <BsFillQuestionCircleFill variant="success" />
                    </OverlayTrigger>
                    <a href="/advanced-dining">
                        <button className="btn btn-primary">ADVANCED</button>
                    </a>
                    <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderAdvancedTooltip}>
                    <BsFillQuestionCircleFill variant="success" />
                    </OverlayTrigger>
                </nav>
            }
            else if (isCommonRoomSelected) {
                divBody = 
                <nav>
                    <a href="/basic-commonroom">
                        <button className="btn btn-primary">BASIC</button>
                    </a>
                    <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderBasicTooltip}>
                    <BsFillQuestionCircleFill variant="success" />
                    </OverlayTrigger>
                    <a href="/advanced-commonroom">
                        <button className="btn btn-primary">ADVANCED</button>
                    </a>
                    <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderAdvancedTooltip}>
                    <BsFillQuestionCircleFill variant="success" />
                    </OverlayTrigger>
                </nav>
            }
        } 

        else {
            divHeader = 
            <nav className="centered-layout">
                <h2 className="title">EXPOSURE CALCULATION</h2>
                <p className="desc">
                    What kind of Location?
                </p>
            </nav>
            divBody = 
            <nav>
                <button id="classroom-button" className="btn btn-secondary" onClick={this.setClassroomSelected}><b>CLASSROOM</b></button>
                <button id="dining-button" className="btn btn-secondary" onClick={this.setDiningSelected}><b>DINING AREA</b></button>
                <button id="commonroom-button" className="btn btn-secondary" onClick={this.setCommonRoomSelected}><b>COMMON ROOM</b></button> 
            </nav>
        }
    return(
        <nav className="centered-layout">
            <div>
              {divHeader}
              {divBody}
            </div>
        </nav>
        )
    }
} 