import { useState } from 'react'
import Games from './games'
import './App.css'

function getRandomGame(){
  const gameArray = ['Cyberpunk','Cyberpunktwo','Hades','Little','Edith','Satisfactory']
  return gameArray[Math.floor(Math.random()*gameArray.length)]
}

function App() {
  const [games, setGames] = useState([])
 
  const handleClick = () =>{
    setGames([...games, getRandomGame()])
  };
  const gameList = games.map((game,index)=>{
    return <Games key={index} gameName={game} />;
  });

  return (
    <div className='App'>
    <button onClick={handleClick} className='btn'>Add a Game</button>
    <div className='gameList'>
      {gameList}
    </div>
    </div>
  )
}

export default App
