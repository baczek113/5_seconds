import { React, useState, useEffect } from 'react'
import card from './card.png'
import {Button} from 'react-bootstrap/'

export default function MainPanel({players, setPlayers, gameState, setGameState, setInGame}){
    let [questions, setQuestions] = useState(['1', '2', '3', '4', '5'])
    let [whichPlayer, setWhichPlayer] = useState('')
    let [question, setQuestion] = useState('')
    let [timer, setTimer] = useState('')
    let [start, setStart] = useState(<div className="mb-2" style = {{position: 'absolute', top: '420px', left: '562px'}} onClick = {()=>{setWhichPlayer(0); setStart('')}}>
    <Button variant="secondary" size="lg">
      Zacznij gre
    </Button>
  </div>)
    useEffect(() => {
        if(start===''){
        let temp = questions
        let randomNumber = Math.floor(Math.random()*(questions.length))
        setQuestion(<div><p style = {{position: 'absolute', top: '320px', left: '560px', fontSize: '20px'}}>Teraz kolej:<br></br>{players[whichPlayer].name}</p>
        <p style = {{position: 'absolute', top: '450px', left: '590px', fontSize: '35px', fontWeight: 'bold'}}>{questions[randomNumber]}</p></div>)
        temp.splice(randomNumber, 1)
        setQuestions(temp)
        setTimer(5)
        setTimeout(()=>{
            setTimer(4)
        },1000)
        setTimeout(()=>{
            setTimer(3)
        },2000)
        setTimeout(()=>{
            setTimer(2)
        },3000)
        setTimeout(()=>{
            setTimer(1)
        },4000)
        setTimeout(()=>{
            setTimer('')
        },5000)
        setTimeout(()=>{
            setQuestion(<div><Button variant="secondary" size="lg" style = {{position: 'absolute', top: '400px', left: '530px'}} onClick={() => {setPlayers(Object.assign([], players, {whichPlayer: {'points': players[whichPlayer].points+1, 'name': players[whichPlayer].name}}))
            if(whichPlayer+1!==parseInt(gameState.substring(0, 1)))
            {
                setWhichPlayer(whichPlayer+1)
            }
            else{
                setWhichPlayer(0)
            }}}>
            Odpowiedział na czas
          </Button>
          <Button variant="secondary" size="lg" style = {{position: 'absolute', top: '500px', left: '520px'}} onClick = {()=>{if(whichPlayer+1!==parseInt(gameState.substring(0, 1)))
            {
                setWhichPlayer(whichPlayer+1)
            }
            else{
                setWhichPlayer(0)}}}>
            Nie odpowiedział na czas
            </Button></div>)
        }, 5000)
    }
    }, [whichPlayer])

    return(
        <div style = {{width: '50%', height: '100%', float: 'left'}}>
            <img src = {card} style = {{height: '634.5px', width: '430.5px', marginLeft: '400px', marginTop: '100px'}}></img>
            <div style = {{position: 'absolute', top: '270px', left: '600px', fontSize: '35px', fontWeight: 'bold', color: 'grey'}}>{timer}</div>
            {question}
            {start}
        </div>
    )
}