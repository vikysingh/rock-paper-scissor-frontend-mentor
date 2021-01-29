import Image from "../../../assets/images/image-rules.svg"
import CloseImage from "../../../assets/images/icon-close.svg"
import styles from "./styles.module.css"

interface Props {
    clickHandler(state: boolean): void
}

export default function index({ clickHandler }: Props) {
    return (
        <section className={styles.modal_section} >
            <div className={styles.modal}>
                <div className={styles.modal_header}>
                    <h2>RULES</h2>
                    <img onClick={() => clickHandler(false)} role="button"
                    src={CloseImage}
                    className={styles.modal_close_icon} alt="Close icon" />
                </div>
                <img src={Image} className={styles.modal_img} alt="Rules image" />
            </div>
        </section>
    )
}
