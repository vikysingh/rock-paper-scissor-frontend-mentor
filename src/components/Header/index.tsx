import styles from "./style.module.css"

interface Props {
    score: number
}

export default function index({ score }: Props) {
    return (
        <header className={styles.header} >
            <div>
                <h2>ROCK</h2>
                <h2>PAPER</h2>
                <h2>SCISSORS</h2>
            </div>
            <div className={styles.header__score_board} >
                <h5>SCORE</h5>
                <h1>{score}</h1>
            </div>
        </header>
    )
}
