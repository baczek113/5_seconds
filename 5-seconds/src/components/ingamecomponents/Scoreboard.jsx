import React from 'react'
import {Row, Col, Container} from 'react-bootstrap/'

export default function Scoreboard({players, setPlayers, gameState}){
    let temp
    let full = [<Row><Col>Gracz:</Col><Col>Punkty:</Col></Row>]
    for(let i = 0; parseInt(gameState.substring(0, 1))>i; i++)
    {
        temp=<Row style = {{marginTop: '5px'}}>
            <Col sm>{players[i][1]}</Col>
            <Col sm>{players[i][0]}</Col>
        </Row>
        full.push(temp)
        console.log(full)
    }
    return(
        <div style = {{float: 'right', width: '22.5%', marginRight: '40px', marginTop: '40px', border: '1px solid #808080', borderRadius: '5px', padding: '10px'}}>
            {full.map(item=>item)}
        </div>
    )
}