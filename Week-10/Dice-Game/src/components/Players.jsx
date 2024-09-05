import Dices from './Dices';
import { useContext } from 'react'
import { GameContext } from '../context/GameProvider'
import './Players.css'

function Players() {
  const {player1Name, player2Name,setPlayer1Name,setPlayer2Name } = useContext(GameContext);

  return (

    <div className='players'>
      <h1>Dice Game 🤝</h1>
      <div className='players-inputs'>
        <input onChange={(e)=> setPlayer1Name(e.target.value)} type="text" value={player1Name}/>    
        <input onChange={(e)=> setPlayer2Name(e.target.value)} type="text" value={player2Name} />
      </div>
     
    <Dices/>
    </div>
  )
}
export default Players