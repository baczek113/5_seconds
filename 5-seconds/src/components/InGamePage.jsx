import React from 'react'
import MainPanel from './ingamecomponents/MainPanel'
import Scoreboard from './ingamecomponents/Scoreboard'

export default function InGamePage({players, setPlayers, gameState, setGameState, setInGame}){
    return(
        <div>
            <MainPanel players={players} setPlayers={setPlayers} gameState={gameState} setGameState={setGameState} setInGame={setInGame}/>
            <Scoreboard players={players} setPlayers={setPlayers} gameState={gameState}/>
        </div>
    )
}
