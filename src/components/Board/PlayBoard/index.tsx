import { Scissor, Paper } from "../../Icons/index"
import styles from "./styles.module.css"
import ResultBanner from "./ResultBanner"

interface ColumnProps {
    title: string;
    icon: JSX.Element
}

function Column({title, icon}: ColumnProps) {
    return <div className={styles.play_board_column} >
        <h4> {title} </h4>
        {icon}
    </div>
}

export default function index() {
    return (
        <main className={styles.play_board} >
            <Column title="YOU PICKED" icon={<Scissor />} />
            <Column title="THE HOUSE PICKED" icon={<Paper />} />
            <ResultBanner label="YOU WIN" />
        </main>
    )
}

