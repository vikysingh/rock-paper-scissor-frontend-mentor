import ScissorIcon from "../../assets/images/icon-scissors.svg"
import styles from "./styles.module.css"

export default function Scissor() {
    return (
        <img src={ScissorIcon} className={`${styles.play_icons} ${styles.scissor_icon}`} />
    )
}
