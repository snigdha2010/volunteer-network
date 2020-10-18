import React from 'react';
import { Button, Navbar, Nav , Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
   
      
    return (
        <div>
            <Navbar  variant="dark">
                <Navbar.Brand as ={ Link } to ='/' href="#home"><img className = 'logo' src="https://i.ibb.co/bWq0wpc/Group-1329.png" width='150' height='80' alt="Nav Bar logo"/></Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#donation">Donation</Nav.Link>
                <Nav.Link href="#events">Events</Nav.Link>
                </Nav>
                <Form inline >
                <Button className='m-4' as = {Link} to ='/login' bg='danger' >LogIn</Button>
                <Button  as = {Link} to ='/addProgram' bg='danger' >Admin</Button>
                </Form>
            </Navbar>  
        </div>
    );
};

export default Header;