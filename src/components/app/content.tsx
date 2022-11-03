import { motion } from "framer-motion"
import styles from "src/styles/layout.module.scss"

interface Props {
    children: React.ReactNode | React.ReactNode[]
}

const Content: React.FC<Props> = ({ children }) => {
    return (
        <motion.div
            className={styles.content}
            // initial={{ translate: "100vmin 0" }}
            // animate={{ translate: "0 0" }}
            // exit={{ translate: "0 100vmin" }}
            // transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    )
}

export default Content
