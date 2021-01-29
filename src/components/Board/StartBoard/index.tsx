import { Paper, Rock, Scissor } from "../../Icons/index"
import styles from "./style.module.css"


function Bar() {
    return <div className={`${styles.start_board_bar}`} ></div>
}

export default function index() {
    return (
        <main className={styles.start_board}>
            <Paper />
            <Bar />
            <Scissor />
            <Bar />
            <Bar />
            <Rock />
        </main>
    )
}
