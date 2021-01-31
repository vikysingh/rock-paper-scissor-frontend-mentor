import styles from "./styles.module.css"

interface Props {
    label: string;
    resetter: any;
}

export default function ResultBanner({label, resetter}: Props) {
    return (
        <div className={styles.result_banner}>
            <h1> {label} </h1>
            <button onClick={() => resetter()} >PLAY AGAIN</button>
        </div>
    )
}
