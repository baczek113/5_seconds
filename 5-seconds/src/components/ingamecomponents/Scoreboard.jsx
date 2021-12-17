import {React, useState} from 'react'
import {Row, Col, Container, Button} from 'react-bootstrap/'

export default function Scoreboard({players, setPlayers, gameState}){
    let temp
    const addPoints= (number) =>
    {
        temp = players
        temp[number][0]++
        setPlayers(temp)
    }
    switch(parseInt(gameState.substring(0, 1))){
    case 2:
    return(
        <div style = {{float: 'right', width: '22.5%', marginRight: '40px', marginTop: '40px', border: '1px solid #808080', borderRadius: '5px', padding: '10px'}}>
            <Row>
                <Col>Gracze</Col>
                <Col>Punkty</Col>
            </Row>
            <Row>
                <Col>{players[0][1]}</Col>
                <Col>{players[0][0]}</Col>
            </Row>
            <Row>
                <Col>{players[1][1]}</Col>
                <Col>{players[1][0]}</Col>
            </Row>
        </div>
    )
    case 3:
        return(
            <div style = {{float: 'right', width: '22.5%', marginRight: '40px', marginTop: '40px', border: '1px solid #808080', borderRadius: '5px', padding: '10px'}}>
                <Row>
                    <Col>Gracze</Col>
                    <Col>Punkty</Col>
                </Row>
                <Row>
                    <Col>{players[0][1]}</Col>
                    <Col>{players[0][0]}</Col>
                </Row>
                <Row>
                    <Col>{players[1][1]}</Col>
                    <Col>{players[1][0]}</Col>
                </Row>
                <Row>
                    <Col>{players[2][1]}</Col>
                    <Col>{players[2][0]}</Col>
                </Row>
            </div>
        )
        case 4:
        return(
            <div style = {{float: 'right', width: '22.5%', marginRight: '40px', marginTop: '40px', border: '1px solid #808080', borderRadius: '5px', padding: '10px'}}>
                <Row>
                    <Col>Gracze</Col>
                    <Col>Punkty</Col>
                </Row>
                <Row>
                    <Col>{players[0][1]}</Col>
                    <Col>{players[0][0]}</Col>
                </Row>
                <Row>
                    <Col>{players[1][1]}</Col>
                    <Col>{players[1][0]}</Col>
                </Row>
                <Row>
                    <Col>{players[2][1]}</Col>
                    <Col>{players[2][0]}</Col>
                </Row>
                <Row>
                    <Col>{players[3][1]}</Col>
                    <Col>{players[3][0]}</Col>
                </Row>
            </div>
        )
        case 5:
        return(
            <div style = {{float: 'right', width: '22.5%', marginRight: '40px', marginTop: '40px', border: '1px solid #808080', borderRadius: '5px', padding: '10px'}}>
                <Row>
                    <Col>Gracze</Col>
                    <Col>Punkty</Col>
                </Row>
                <Row>
                    <Col>{players[0][1]}</Col>
                    <Col>{players[0][0]}</Col>
                </Row>
                <Row>
                    <Col>{players[1][1]}</Col>
                    <Col>{players[1][0]}</Col>
                </Row>
                <Row>
                    <Col>{players[2][1]}</Col>
                    <Col>{players[2][0]}</Col>
                </Row>
                <Row>
                    <Col>{players[3][1]}</Col>
                    <Col>{players[3][0]}</Col>
                </Row>
                <Row>
                    <Col>{players[4][1]}</Col>
                    <Col>{players[4][0]}</Col>
                </Row>
                <button onClick={addPoints(1)}>xd</button>
            </div>
        )
    }
}