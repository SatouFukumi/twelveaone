import { motion } from "framer-motion"

interface Props {
    children: React.ReactNode | React.ReactNode[]
}

const Content: React.FC<Props> = ({ children }) => {
    return <motion.div>{children}</motion.div>
}

export default Content
