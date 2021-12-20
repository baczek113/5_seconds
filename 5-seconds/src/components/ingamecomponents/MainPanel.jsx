import { React, useState, useEffect } from 'react'
import card from './card.png'

export default function MainPanel({players, setPlayers, gameState, setGameState, setInGame}){
    let [questions, setQuestions] = useState(['dupa', 'cyce', 'wadowice'])
    let [currentQuestion, setCurrentQuestion] = useState(0)
    let [whichPlayer, setWhichPlayer] = useState(0)
    useEffect(() => {
        let temp = questions
        let randomNumber = Math.random()*(questions.length)
        setCurrentQuestion(randomNumber)
        temp.splice(randomNumber, 1)
        setQuestions(temp)
    }, [whichPlayer])
    

    const changeQuestion = () => 
    {

    }

    return(
        <div style = {{width: '50%', height: '100%', float: 'left'}}>
            <img src = {card} style = {{height: '634.5px', width: '430.5px', marginLeft: '400px', marginTop: '100px'}}></img>
            <p style = {{position: 'absolute', top: '400px', left: '585px', fontSize: '20px'}}>{players[whichPlayer].name}</p>
            <p style = {{position: 'absolute', top: '450px', left: '585px', fontSize: '20px'}}>{questions[currentQuestion]}</p>
        </div>
    )
}