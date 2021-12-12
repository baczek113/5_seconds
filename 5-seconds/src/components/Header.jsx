import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap/'

export default function header(){
    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand><h1>5 seconds</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" style ={{fontSize: 15}}>Home</Nav.Link>
                            <NavDropdown title="Start game" id="basic-nav-dropdown" style = {{fontSize: 25}}>
                                <NavDropdown.Item>2 Players</NavDropdown.Item>
                                <NavDropdown.Item>3 Players</NavDropdown.Item>
                                <NavDropdown.Item>4 Players</NavDropdown.Item>
                                <NavDropdown.Item>5 Players</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}