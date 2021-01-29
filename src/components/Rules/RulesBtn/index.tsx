import styles from "./styles.module.css"

interface Props {
    clickHandler(state: boolean): void
}

export default function index({ clickHandler }: Props) {
    return (
        <button onClick={() => clickHandler(true)} className={styles.rules_btn} >Rules</button>
    )
}
