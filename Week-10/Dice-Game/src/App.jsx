import {useContext } from 'react'
import Button from './components/Button'
import './App.css'
import GameProvider from './context/GameProvider'
import Players from './components/Players'

function App() {

  return (
    <GameProvider>
    <Players/>
    <Button/>
    </GameProvider>
  )
}

export default App
