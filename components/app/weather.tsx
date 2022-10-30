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

        /**
         * TODO getting address and display
         * https://stackoverflow.com/questions/66506483/how-to-get-the-address-from-coordinates-with-open-street-maps-api/66509433#66509433
         */
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
