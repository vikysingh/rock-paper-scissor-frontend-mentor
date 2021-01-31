import styles from "./styles.module.css"
import ResultBanner from "./ResultBanner"

interface ColumnProps {
    title: string;
    icon: JSX.Element
}

interface PlayBoardProps {
    firstIcon: any;
    secondIcon: any;
    winner: string;
    resetter: any;
}

function Column({title, icon}: ColumnProps) {
    return <div className={styles.play_board_column} >
        <h4> {title} </h4>
        {icon}
    </div>
}

export default function PlayBoard({firstIcon, secondIcon, winner, resetter}:PlayBoardProps) {
    return (
        <main className={styles.play_board} >
            <Column title="YOU PICKED" icon={firstIcon} />
            <Column title="THE HOUSE PICKED" icon={secondIcon} />
            <ResultBanner resetter={resetter} label={winner === "user" ? "YOU WIN" : "YOU LOSE"} />
        </main>
    )
}

 