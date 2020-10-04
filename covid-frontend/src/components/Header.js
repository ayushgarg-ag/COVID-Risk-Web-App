import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #c0b3f2;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #c0b3f2;
    &:hover { color: white; }
  }
`;
export const Header = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">COVID-19 Exposure Modeler</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/calculate">Calculate</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)
