import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap/'

export default function Header(props){
    
    return(
        <div>
            <Navbar bg="light" expand="lg" style={{height: '70px'}}>
                <Container>
                    <Navbar.Brand style={{marginRight: '40px'}}><h1>5 sekund</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link style ={{fontSize: 20, marginTop: '15px'}} onClick={()=>props.setGameState('mainPage')}>Home</Nav.Link>
                            {(props.gameState==="mainPage")?
                            <NavDropdown title="Rozpocznij gre" id="basic-nav-dropdown" style = {{fontSize: 40, marginLeft:'220px'}}>
                                <NavDropdown.Item onClick={() => props.setGameState('2Players')}>2 Graczy</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => props.setGameState('3Players')}>3 Graczy</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => props.setGameState('4Players')}>4 Graczy</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => props.setGameState('5Players')}>5 Graczy</NavDropdown.Item>
                            </NavDropdown>:
                            <Nav.Link style={{fontSize: 40, marginLeft:'270px'}} onClick={()=>props.setGameState('mainPage')}><h1>Zakończ gre</h1></Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
