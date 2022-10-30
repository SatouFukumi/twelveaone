import styles from "src/styles/ruler.module.scss"
import Clock from "./clock"
import Weather from "./weather"

const Ruler: React.FC<LayoutProps> = ({ id }) => {
    return (
        <div
            id={id}
            className={styles.container}
        >
            <Clock />
            <Weather />
        </div>
    )
}

export default Ruler
