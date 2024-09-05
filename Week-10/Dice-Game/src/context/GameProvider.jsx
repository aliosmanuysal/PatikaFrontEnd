import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

function GameProvider({children}) {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [result, setResult] = useState("");
  const [player1Name, setPlayer1Name] = useState("Player-1");
  const [player2Name, setPlayer2Name] = useState("Player-2");
  
  return (
    <GameContext.Provider value={{dice1,setDice1,dice2,setDice2,result,setResult,player1Name,setPlayer1Name,player2Name,setPlayer2Name}}>{children}</GameContext.Provider>
  )
}
export default GameProvider;
export  {GameContext};