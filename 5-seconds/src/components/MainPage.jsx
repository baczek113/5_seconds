import React, {useState} from 'react'
import {Card} from 'react-bootstrap/'

export default function MainPage(props){
    if(props.gameState=='mainPage')
    {
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
    }
    else
    {
        return(
            <p class = 'fw-bolder'>tera ingame</p>
        );
    }
}