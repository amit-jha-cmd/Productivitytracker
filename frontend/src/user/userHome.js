import React from "react";
import firebaseConfig from "../config/Fire";
import {Navbar,Button,Nav,NavDropdown,NavDropdownProps,Form,FormControl} from 'react-bootstrap'
import '../styles/userHome.css'
import {Card} from 'react-bootstrap'
import {Pie} from 'react-chartjs-2'
const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Analysis',
      backgroundColor: [
        '#d580ff',
        '#ffcce6',
        '#b3d9ff',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#7700b3',
      '#b3005c',
      '#0066cc',
      '#003350',
      '#35014F'
      ],
      data: [65, 59, 80, 81, 56]
    }
  ]
}
const userHome = () => {
  return (
    <>
     <Navbar bg="light" expand="lg">
  <Navbar.Brand href="home">Productivity Tracker</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    
    <Nav className="mr-auto">
    <Nav.Link href="/log">Log</Nav.Link>
     <Nav.Link href="/logentries">Log entries</Nav.Link>
    <button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
    
    </Nav>
  </Navbar.Collapse>
</Navbar>
      <h1>Welcome to your home page!</h1>
      <div class="container">
  <div class="row">
    <div class="col">
    <h3>Analysis</h3>
    <Card body>
    <Pie
          data={state}
          options={{
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
    </Card>
    </div>
    <div class="col">
    <h3>Productivity</h3>
    <Card body>This is some text within a card body.</Card>
    </div>
  </div>
  </div>
    </>
  );
};

export default userHome;