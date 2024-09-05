import { useContext } from "react"
import { GameContext } from '../context/GameProvider'

function Button() {

  const {setDice1,setDice2,setResult, player1Name, player2Name, result} = useContext(GameContext);

  const handleDiceRoll = () => {

    const interval = setInterval(() => {
      const rolledDice1 = Math.round(Math.random() * 5) + 1;
      const rolledDice2 = Math.round(Math.random() * 5) + 1;
      setDice1(rolledDice1);
      setDice2(rolledDice2);
    }, 80);

    setTimeout(() => {
      clearInterval(interval);
      const rolledDice1 = Math.round(Math.random() * 5) + 1;
      const rolledDice2 = Math.round(Math.random() * 5) + 1;
      setDice1(rolledDice1);
      setDice2(rolledDice2);

      if (rolledDice1 > rolledDice2) {
        setResult(`${player1Name} wins!`);
      } else if (rolledDice2 > rolledDice1) {
        setResult(`${player2Name} wins!`);
      } else {
        setResult("Nobody wins, try again!");
      }
    }, 1000);
  };

  return (
    <>
    <button onClick={handleDiceRoll}>Play</button>
    <h3>{result}</h3>
    </>
  )
}

export default Button