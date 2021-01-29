import Header from "./components/Header"
import Rules from "./components/Rules/index"
// import { Paper, Rock, Scissor } from "./components/Icons/index"
import { PlayBoard } from "./components/Board/index"

export default function App() {
  return (
    <div>
      <Header score={4} />
      <Rules />
      <PlayBoard />
    </div>
  )
}
