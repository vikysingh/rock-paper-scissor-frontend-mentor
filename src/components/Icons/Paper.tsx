import PaperIcon from "../../assets/images/icon-paper.svg"

import styles from "./styles.module.css"

export default function Paper() {
    return (
        <img src={PaperIcon} className={`${styles.play_icons} ${styles.paper_icon}`} />
    )
}
