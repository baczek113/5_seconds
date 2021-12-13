import React, {useState} from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap/'

export default function Header(){
    let [gameState, setGameState] = useState('mainPage');
    return(
        <div>
            <Navbar bg="light" expand="lg" style={{height: '70px'}}>
                <Container>
                    <Navbar.Brand style={{marginRight: '40px'}}><h1>5 seconds</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link style ={{fontSize: 20, marginTop: '15px'}}>Home</Nav.Link>
                            {(gameState=="mainPage")?
                            <NavDropdown title="Start game" id="basic-nav-dropdown" style = {{fontSize: 40, marginLeft:'235px'}}>
                                <NavDropdown.Item onClick={() => setGameState('2Players')}>2 Players</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setGameState('3Players')}>3 Players</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setGameState('4Players')}>4 Players</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setGameState('5Players')}>5 Players</NavDropdown.Item>
                            </NavDropdown>:
                            <Nav.Link style={{fontSize: 40, marginLeft:'270px'}} onClick={()=>setGameState('mainPage')}><h1>End Game</h1></Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
    export {gameState};
}
