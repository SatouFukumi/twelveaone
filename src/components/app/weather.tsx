import { useGeolocation } from "@ts/hooks"
import Image from "next/image"
import { useEffect, useState } from "react"
import { trpc } from "src/backend/api/trpc"

// kelvin to celcius
const k2c = (k: number) => Math.round(k - 273.15)

const Weather: React.FC = () => {
    const { geoPosition } = useGeolocation()
    const [coords, setCoords] = useState({
        longitude: 108.258705,
        latitude: 14.04345875,
    })

    const { isLoading, data: OWM } = trpc.weatherRouter.get.useQuery({
        latitude: coords.latitude,
        longitude: coords.longitude,
    })

    useEffect(() => {
        if (geoPosition?.coords) setCoords(geoPosition.coords)
    }, [geoPosition])

    // cSpell: disable
    if (!OWM || isLoading) return <>Loading...</>

    const { main, weather } = OWM

    return (
        <span>
            <Image
                alt=""
                src={`https://openweathermap.org/img/w/${weather[0].icon}.png`}
                width="30"
                height="30"
                loading="lazy"
            />
        </span>
    )
    // cSpell: enable
}

export default Weather
