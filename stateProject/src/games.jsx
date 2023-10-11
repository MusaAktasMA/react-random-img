import Cyberpunk from './images/cyberpunk.jpg' 
import Cyberpunktwo from './images/cyberpunk.png' 
import Hades from './images/hades.jpg' 
import Little from './images/littlenightmares.jpg' 
import Satisfactory from './images/satisfactory.jpg' 
import Edith from './images/whatremainsofedithfinch.jpg' 
import './game.css';

const gameMap = {
      Cyberpunk,
      Cyberpunktwo,
      Hades,
      Satisfactory,
      Little,
      Edith,
}

function Games({gameName}) {
      console.log(Cyberpunk);
      console.log(gameName)
      console.log(gameMap[gameName])
      return <div className='gameDiv'>
      
      <img className='gameImg' src={gameMap[gameName]} alt="game" />
      </div>;
}

export default Games;