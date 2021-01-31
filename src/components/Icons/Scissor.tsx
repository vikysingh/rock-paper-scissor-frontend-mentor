import ScissorIcon from "../../assets/images/icon-scissors.svg"
import styles from "./styles.module.css"
import {SetStateAction, Dispatch } from "react"

interface Props {
    optionSetter: Dispatch<SetStateAction<string>>
}

export default function Scissor({optionSetter}:Props) {
    return (
        <img src={ScissorIcon} 
        className={`${styles.play_icons} ${styles.scissor_icon}`}
        onClick={() => optionSetter("scissor")} alt="Scissor Icon"
        />
    )
}
