import RockIcon from "../../assets/images/icon-rock.svg"
import styles from "./styles.module.css"
import {SetStateAction, Dispatch } from "react"

interface Props {
    optionSetter: Dispatch<SetStateAction<string>>
}

export default function Rock({optionSetter}:Props) {
    return (
        <img src={RockIcon} className={`${styles.play_icons} ${styles.rock_icon}`}
        onClick={() => optionSetter("rock")}/>
    )
}
