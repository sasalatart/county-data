import React from 'react';
import { Navbar } from 'react-bootstrap';
import CountyNameForm from './CountyNameForm';

const AppNavbar = () => {
  return(
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand><a href="#">County Data App</a></Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <CountyNameForm />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
