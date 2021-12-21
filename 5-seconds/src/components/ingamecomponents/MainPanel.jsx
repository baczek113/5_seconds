import { React, useState, useEffect } from 'react'
import card from './card.png'
import {Button} from 'react-bootstrap/'

export default function MainPanel({players, setPlayers, gameState, setGameState, setInGame}){
    let [questions, setQuestions] = useState(['1', '2', '3', '4', '5'])
    let [whichPlayer, setWhichPlayer] = useState('')
    let [question, setQuestion] = useState('')
    let [start, setStart] = useState(<div className="mb-2" style = {{position: 'absolute', top: '420px', left: '562px'}} onClick = {()=>{setWhichPlayer(0); setStart('')}}>
    <Button variant="primary" size="lg">
      Start Game
    </Button>
  </div>)
    useEffect(() => {
        if(start===''){
        let temp = questions
        let randomNumber = Math.floor(Math.random()*(questions.length))
        setQuestion(<div><p style = {{position: 'absolute', top: '320px', left: '550px', fontSize: '20px'}}>Teraz kolej: {players[whichPlayer].name}</p>
        <p style = {{position: 'absolute', top: '450px', left: '585px', fontSize: '20px'}}>{questions[randomNumber]}</p></div>)
        temp.splice(randomNumber, 1)
        setQuestions(temp)
        
        setTimeout(()=>{
            setQuestion(<div><Button variant="primary" size="lg" style = {{position: 'absolute', top: '400px', left: '530px'}} onClick={() => {setPlayers(Object.assign([], players, {whichPlayer: {'points': players[whichPlayer].points+1, 'name': players[whichPlayer].name}}))
            if(whichPlayer+1!==parseInt(gameState.substring(0, 1)))
            {
                setWhichPlayer(whichPlayer+1)
            }
            else{
                setWhichPlayer(0)
            }}}>
            Odpowiedział na czas
          </Button>
          <Button variant="primary" size="lg" style = {{position: 'absolute', top: '500px', left: '520px'}}>
            Nie odpowiedział na czas
            </Button></div>)
        }, 5000)
    }
    }, [whichPlayer])

    return(
        <div style = {{width: '50%', height: '100%', float: 'left'}}>
            <img src = {card} style = {{height: '634.5px', width: '430.5px', marginLeft: '400px', marginTop: '100px'}}></img>
            {question}
            {start}
        </div>
    )
}