import { Paper, Rock, Scissor } from "../../Icons/index"
import styles from "./style.module.css"
import {Dispatch, SetStateAction} from "react"

interface StartBoardProps {
    optionSetter: Dispatch<SetStateAction<string>>
}

function Bar() {
    return <div className={`${styles.start_board_bar}`} ></div>
}

export default function StartBoard({optionSetter}:StartBoardProps) {
    return (
        <main className={styles.start_board}>
            <Paper optionSetter={optionSetter} />
            <Bar />
            <Scissor  optionSetter={optionSetter} />
            <Bar />
            <Bar />
            <Rock  optionSetter={optionSetter} />
        </main>
    )
}
