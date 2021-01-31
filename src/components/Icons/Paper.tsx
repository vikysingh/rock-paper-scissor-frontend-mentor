import PaperIcon from "../../assets/images/icon-paper.svg"
import {SetStateAction, Dispatch } from "react"
import styles from "./styles.module.css"

interface Props {
    optionSetter: Dispatch<SetStateAction<string>>
}

export default function Paper({optionSetter}:Props) {
    return (
        <img src={PaperIcon}
        className={`${styles.play_icons} ${styles.paper_icon}`}
        onClick={() => optionSetter("paper")} alt="Paper Icon"
        />
    )
}
