import { useState } from "react"
import { libraries } from "assets/ts/libraries"
import { useSynchronizedInterval } from "assets/ts/hooks/use-interval"

const currentClock = () => libraries.prettyTime({ format: "hh:mi:ss" })

const Ruler: React.FC<LayoutProps> = ({ id }) => {
    const [clock, setClock] = useState<string>("00:00:00")

    useSynchronizedInterval(() => setClock(currentClock), 1000)

    return (
        <div id={id}>
            <div>{clock}</div>
        </div>
    )
}

export default Ruler
