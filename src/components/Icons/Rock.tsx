import RockIcon from "../../assets/images/icon-rock.svg"
import styles from "./styles.module.css"

export default function Rock() {
    return (
        <img src={RockIcon} className={`${styles.play_icons} ${styles.rock_icon}`} />
    )
}
