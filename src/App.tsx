import Header from "./components/Header"
import Rules from "./components/Rules/index"
import { StartBoard, PlayBoard } from "./components/Board/index"
import { Paper, Rock, Scissor } from "./components/Icons/index"

import { useEffect, useState } from "react"

const gameOptionsPair: any = {
  paper: <Paper optionSetter={() => { }} />,
  rock: <Rock optionSetter={() => { }} />,
  scissor: <Scissor optionSetter={() => { }} />
}

const houseOption: string[] = [
  "paper", "rock", "scissor"
]

export default function App() {

  //userSelection => if user selects rock, paper, or scissors
  const [userSelection, setUserSelection] = useState<string>("")
  //score of the user
  const [userScore, setUserScore] = useState<number>(0)
  //houseOption => if the computer selects rock, paper, or scissors
  const [ houseSelection, setHouseSelection ] =
  useState<string>(houseOption[genRandomInt(0, 3)])

  //for the winner
  const [ winner, setWinner ] = useState<string>("")

  function genRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  useEffect(() => {
    function checkScore() {
      //All the winning cases for the user
      //User selected scissor, house paper
      if (userSelection === "scissor" && houseSelection === "paper") {
        setUserScore((score) => score + 1)
        setWinner("user")
      }
      //user selected rock, house scissor
      else if (userSelection === "rock" && houseSelection === "scissor") {
        setUserScore((score) => score + 1)
        setWinner("user")
      } else if (userSelection === "paper" && houseSelection === "rock") {
        setUserScore((score) => score + 1)
        setWinner("user")
      }
      //All the winning cases for the computer
      else if (userSelection === "paper" && houseSelection === "scissor") {
        setUserScore(score => score - 1)
        setWinner("")
      }
      //user selected rock, house scissor
      else if (userSelection === "scissor" && houseSelection === "rock") {
        setUserScore((score) => score - 1)
        setWinner("")
      } else if (userSelection === "rock" && houseSelection === "paper") {
        setUserScore((score) => score - 1)
        setWinner("")
      }
    }
    checkScore()
  }, [userSelection])

  function playAgain() {
    setUserSelection("")
    setHouseSelection(houseOption[genRandomInt(0, 3)])
  }

  return (
    <>
      <Header score={userScore} />
      <Rules />
      {
        userSelection !== "" ? <PlayBoard winner={winner}
          firstIcon={gameOptionsPair[userSelection]}
          secondIcon={gameOptionsPair[houseSelection]}
          resetter={playAgain} /> :
          //optionSetter is passed to StartBoard because its children require it
          <StartBoard optionSetter={setUserSelection} />
      }
    </>
  );
}
