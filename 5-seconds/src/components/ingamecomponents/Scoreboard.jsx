import {React, useEffect, useState} from 'react'
import {Row, Col} from 'react-bootstrap/'

export default function Scoreboard({players, setPlayers, gameState}){
    let [full, setFull] = useState([])
    useEffect(() => {
        let temp = []
        for(let i = 0; i < parseInt(gameState.substring(0, 1)); i++)
        {
            temp.push(<Row style = {{marginTop: '5px'}}>
            <Col sm>{players[i].name}</Col>
            <Col sm>{players[i].points}</Col>
        </Row>)
        }
        setFull(temp)
    }, [players])
    return(
        <div style = {{float: 'right', width: '22.5%', marginRight: '40px', marginTop: '40px', border: '1px solid #808080', borderRadius: '5px', padding: '10px'}}>
            <Row style = {{marginTop: '5px'}}>
                <Col sm>Gracze</Col>
                <Col sm>Punkty</Col>
            </Row>
            {full.map(item=>item)}
            <button onClick={() => setPlayers(Object.assign([], players, {0: {'points': players[0].points+1, 'name': players[0].name}}))}></button>
        </div>
    )
}