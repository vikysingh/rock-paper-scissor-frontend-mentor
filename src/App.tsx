import Header from "./components/Header";
import Rules from "./components/Rules/index";
import { StartBoard, PlayBoard } from "./components/Board/index";
import {Paper, Rock, Scissor} from "./components/Icons/index"

//import Game from "./engine/Game";
import Player from "./engine/Player";

import {useEffect, useState} from "react";

const base: any = {
  paper: <Paper optionSetter={() => {}} />,
  rock: <Rock optionSetter={() => {}} />,
  scissor: <Scissor optionSetter={() => {}} />
}

const gameOptions = [
  "paper", "rock", "scissor"
]

export default function App() {

  // const user = new Player("YOU");

  const [ userOption, setUserOption ] = useState<string>("")

  function genRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let rand = genRandomInt(-1, 3)

  useEffect(() => {
    console.clear()
    console.log(rand)
  }, [rand])

  return (
    <div>
      <Header score={4} />
      <Rules />
      {
        userOption !== "" ? <PlayBoard firstIcon={base["paper"]}
        secondIcon={base[gameOptions[rand]]} /> :
        <StartBoard optionSetter={setUserOption} />
      }
    </div>
  );
}
