import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header' 
import MainPage from './components/MainPage'
import React, {useState} from 'react'
function App() {
  let [gameState, setGameState] = useState('mainPage')
  let [inGame, setInGame] = useState(false)
  let [players, setPlayers] = useState([])
  console.log('xdddd', players)
  return (
    <div>
      <Header gameState={gameState} setGameState={setGameState} setInGame={setInGame} setPlayers={setPlayers}/>
      <MainPage gameState={gameState} setGameState={setGameState} inGame={inGame} setInGame={setInGame} players={players} setPlayers={setPlayers}></MainPage>
    </div>
  )
}

export default App;

