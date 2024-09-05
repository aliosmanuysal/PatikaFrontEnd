import React from 'react'

import './Dices.css'
import { useContext } from 'react'
import { GameContext } from '../context/GameProvider'

function Dices() {
    const {dice1} = useContext(GameContext);
    const {dice2} = useContext(GameContext);

  return (
    <div className='dices'>
    <img src={`/images/dice${dice1}.png`} alt="" />
    <img src={`/images/dice${dice2}.png`} alt="" />
    </div>

  )
}

export default Dices