import React, {useState} from 'react'
import card from './card.png'

export default function MainPanel({players, setPlayers, gameState, setGameState, setInGame}){
    let [questions, setQuestions] = useState(['dupa', 'cyce', 'wadowice'])
    
    return(
        <div>
            <div style={{backgroundImage: 'url(${card})', width: '100%', height: '100%', backgroundRepeat:'no-repeat'}}></div>
        </div>
    )
}