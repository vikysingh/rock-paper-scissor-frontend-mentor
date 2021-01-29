import styles from "./styles.module.css"

interface Props {
    label: string;
}

export default function ResultBanner({label}: Props) {
    return (
        <div className={styles.result_banner}>
            <h1> {label} </h1>
            <button>PLAY AGAIN</button>
        </div>
    )
}
