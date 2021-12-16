import {React, useState} from 'react'
import {Row, Col, Container, Button} from 'react-bootstrap/'

export default function Scoreboard({players, setPlayers, gameState}){
    let temp
    let [full, setFull] = useState([])
    for(let i = 0; parseInt(gameState.substring(0, 1))>i; i++)
    {
        temp=<Row style = {{marginTop: '5px'}}>
            <Col sm>{players[i][1]}</Col>
            <Col sm>{players[i][0]}</Col>
        </Row>
        full.push(temp)
    }
    return(
        <div style = {{float: 'right', width: '22.5%', marginRight: '40px', marginTop: '40px', border: '1px solid #808080', borderRadius: '5px', padding: '10px'}}>
            <Row style = {{marginTop: '5px'}}>
                <Col sm>Gracze</Col>
                <Col sm>Punkty</Col>
            </Row>
            {full.map(item=>item)}
        </div>
    )
}