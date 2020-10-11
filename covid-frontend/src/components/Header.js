import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #fff; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #012169;
    &:hover { color: black; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #012169;
    &:hover { color: black; }
  }
  #duke-link {
    font-size: 1.4em;
    color: #000;
    &:hover { color: #012169 ; }
  }
`;

export const Header = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">COVID-19 Exposure Modeler</Navbar.Brand>
      <Navbar.Brand href="https://duke.edu/" target="blank" id="duke-link">Duke University</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/calculate-home">Calculate</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)
