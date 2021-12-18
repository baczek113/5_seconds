import React, {useState} from 'react'
import {Card, Form, Button} from 'react-bootstrap/'
import InGamePage from './InGamePage'

export default function MainPage({ gameState, setGameState, inGame, setInGame, players, setPlayers }){
    const handleSubmit = (event) => {
        event.preventDefault();
        let temp =[]
        for(let i = 0; i<parseInt(gameState.substring(0, 1)); i++)
        {
            temp.push({'name': event.target[i].value, 'points': 0})
        }
        setPlayers(temp)
        setInGame(true)
    }
    if(inGame===false){
    switch(gameState){
    case 'mainPage':
    return(
        <div>
            <div style={{width:'100%', height:'160px', float:'left'}}></div>
            <Card style={{ width: '18rem' , margin: '0 auto'}}>
                <Card.Body>
                <Card.Title>Zasady gry</Card.Title>
                <Card.Text>
                    W zależności od wybranej opcji w grze bierze 
                    udział 2, 3, 4 lub 5 graczy. Na ekranie będą pokazywały się kartyz pytaniami, na które trzeba udzielic 3 
                    odpowiedzi w ciągu tytułowych 5 sekund, każdy któremu się to uda powinien otrzymać punkt. Dla pomocy z boku strony będzie 
                    pokazany punktacja graczy a u góry licznik czasu pozostałego na odpowiedź. 
                </Card.Text>
                </Card.Body>
            </Card>
          </div>
        );
    case '2Players':
    return(
        <div style = {{marginTop: '150px', float: 'left', width: '30%', marginLeft: '35%'}}>
            <h2 class = 'fw-bolder'>Ustal nazwy graczy: </h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Gracz 1:</Form.Label>
                    <Form.Control  maxLength = '15' placeholder='Wpisz nazwe' />
                </Form.Group>
                <Form.Group className='mb-3' >
                    <Form.Label>Gracz 2:</Form.Label>
                    <Form.Control  maxLength = '15' placeholder='Wpisz nazwe' />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Rozpocznij grę
                </Button>
            </Form>
        </div>
    );
    case '3Players':
    return(
        <div style = {{marginTop: '150px', float: 'left', width: '30%', marginLeft: '35%'}}>
            <h2 class = 'fw-bolder'>Ustal nazwy graczy: </h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Gracz 1:</Form.Label>
                    <Form.Control maxLength = '15' placeholder='Wpisz nazwe' />
                </Form.Group>
                <Form.Group className='mb-3' >
                    <Form.Label>Gracz 2:</Form.Label>
                    <Form.Control maxLength = '15' placeholder='Wpisz nazwe' />
                </Form.Group>
                <Form.Group className='mb-3' >
                    <Form.Label>Gracz 3:</Form.Label>
                    <Form.Control maxLength = '15' placeholder='Wpisz nazwe' />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Rozpocznij grę
                </Button>
            </Form>
        </div>
    );
    case '4Players':
    return(
        <div style = {{marginTop: '150px', float: 'left', width: '30%', marginLeft: '35%'}}>
            <h2 class = 'fw-bolder'>Ustal nazwy graczy: </h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Gracz 1:</Form.Label>
                    <Form.Control maxLength = '15' placeholder='Wpisz nazwe' />
                </Form.Group>
                <Form.Group className='mb-3' >
                    <Form.Label>Gracz 2:</Form.Label>
                    <Form.Control maxLength = '15' placeholder='Wpisz nazwe' />
                </Form.Group>
                <Form.Group className='mb-3' >
                    <Form.Label>Gracz 3:</Form.Label>
                    <Form.Control maxLength = '15' placeholder='Wpisz nazwe' />
                </Form.Group>
                <Form.Group className='mb-3' >
                    <Form.Label>Gracz 4:</Form.Label>
                    <Form.Control maxLength = '15' placeholder='Wpisz nazwe' />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Rozpocznij grę
                </Button>
            </Form>
        </div>
    );
    case '5Players':
    return(
        <div style = {{marginTop: '150px', float: 'left', width: '30%', marginLeft: '35%'}}>
            <h2 class = 'fw-bolder'>Ustal nazwy graczy: </h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Gracz 1:</Form.Label>
                    <Form.Control maxLength = '15' placeholder='Wpisz nazwe' />
                </Form.Group>
                <Form.Group className='mb-3' >
                    <Form.Label>Gracz 2:</Form.Label>
                    <Form.Control maxLength = '15' placeholder='Wpisz nazwe' />
                </Form.Group>
                <Form.Group className='mb-3' >
                    <Form.Label>Gracz 3:</Form.Label>
                    <Form.Control maxLength = '15' placeholder='Wpisz nazwe' />
                </Form.Group>
                <Form.Group className='mb-3' >
                    <Form.Label>Gracz 4:</Form.Label>
                    <Form.Control maxLength = '15' placeholder='Wpisz nazwe' />
                </Form.Group>
                <Form.Group className='mb-3' >
                    <Form.Label>Gracz 5:</Form.Label>
                    <Form.Control maxLength = '15' placeholder='Wpisz nazwe' />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Rozpocznij grę
                </Button>
            </Form>
        </div>
    )
   
    }
    }
    else{
        return(
            <InGamePage players = {players} setPlayers={setPlayers} gameState = {gameState} setGameState={setGameState} setInGame={setInGame}/>
        )
}
}