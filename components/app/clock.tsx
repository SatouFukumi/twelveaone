import { useClock, useRenderEffect } from "@ts/hooks"
import { libraries } from "@ts/libraries"
import { useState } from "react"
import styles from "src/styles/ruler.module.scss"

const Clock: React.FC = () => {
    const date = useClock()
    const [clock, setClock] = useState("00:00:00")

    useRenderEffect(
        () =>
            setClock(libraries.prettyTime({ timestamp: date, format: "hh:mi:ss" })),
        [date]
    )

    return <span className={styles.clock}>{clock}</span>
}

export default Clock
