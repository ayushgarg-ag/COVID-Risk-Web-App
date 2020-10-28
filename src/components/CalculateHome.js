import React from 'react';
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

function CalculateHome(){

    return(
        <nav className="centered-layout">
            <h2 className="title">EXPOSURE CALCULATION</h2>
            <a href="/locations-basic">
                <button className="btn btn-primary">BASIC</button>
            </a>
            <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderBasicTooltip}>
                <BsFillQuestionCircleFill variant="success" />
            </OverlayTrigger><br/>
            <a href="/locations-advanced">
                <button className="btn btn-primary">ADVANCED</button>
            </a>
            <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderAdvancedTooltip}>
                <BsFillQuestionCircleFill variant="success" />
            </OverlayTrigger>
        </nav> 
    )
}

export default CalculateHome;
