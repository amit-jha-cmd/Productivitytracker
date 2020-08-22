import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import {Navbar,Button,Nav,NavDropdown,NavDropdownProps,Form,FormControl} from 'react-bootstrap'



const NavBar = () => (
    
       <div>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand >Productivity Tracker</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    
    <Nav className="mr-auto">
    
     <Nav.Link href="/signup">Signup</Nav.Link>
     <Nav.Link href="/login">Login</Nav.Link>
    
    </Nav>
  </Navbar.Collapse>
</Navbar>
  
    
    </div>
);

export default withRouter(NavBar);
