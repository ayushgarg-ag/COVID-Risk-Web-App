import React from 'react';
import './CalculateHome.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Popover from "react-bootstrap/Popover";

function renderTooltip(props) {
    return <Tooltip {...props}>The advanced assessment is best for...</Tooltip>;
  }
  
  const popover = (
      <Popover>
        <Popover.Title as="h1">Basic Test</Popover.Title>
        <Popover.Content>
          The basic assessment is best for...
        </Popover.Content>
      </Popover>
    );  

function CalculateHome(){

    return(
        <nav className="centered-layout">
            <h2 className="title">EXPOSURE CALCULATION</h2>
            <a href="/locations-basic">
                <button className="btn btn-primary">BASIC</button>
            </a>
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button size="sm" variant="success">What's this?</Button>
            </OverlayTrigger><br/>
            <a href="/locations-advanced">
                <button className="btn btn-primary">ADVANCED</button>
            </a>
            <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                <BsFillQuestionCircleFill variant="success" />
            </OverlayTrigger>
        </nav> 
    )
}

export default CalculateHome;
