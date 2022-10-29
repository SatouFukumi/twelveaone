import styles from "src/styles/ruler.module.scss"
import Clock from "./clock"

const Ruler: React.FC<LayoutProps> = ({ id }) => {
    return (
        <div
            id={id}
            className={styles.container}
        >
            <Clock />
        </div>
    )
}

export default Ruler
