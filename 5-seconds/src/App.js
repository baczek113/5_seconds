import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header' 
import MainPage from './components/MainPage'
import React, {useState} from 'react'
function App() {
  let [gameState, setGameState] = useState('mainPage');
  return (
    <div>
      <Header gameState={gameState} setGameState={setGameState}/>
      <MainPage gameState={gameState} setGameState={setGameState}></MainPage>
    </div>
  );
}

export default App;

