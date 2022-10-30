import { useGeolocation } from "@ts/hooks"
import { useEffect, useState } from "react"

const Weather: React.FC = () => {
    const { position, startWatch } = useGeolocation()
    const [coords, setCoords] = useState({
        longitude: 108.258705,
        latitude: 14.04345875,
    })

    useEffect(() => {
        if (position?.coords) setCoords(position.coords)
    }, [position])

    if (!position) return <>default</>

    return (
        <>
            Kinh độ : {position.coords.longitude}
            {" "}
            Vĩ độ : {position.coords.latitude}
        </>
    )
}

export default Weather
