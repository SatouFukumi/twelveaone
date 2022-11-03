import { useGeolocation } from "@ts/hooks"
import Image from "next/image"
import { useEffect, useState } from "react"
import { trpc } from "src/backend/api/trpc"

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

    const { icon } = OWM.weather[0]

    return (
        <Image
            alt=""
            src={`https://openweathermap.org/img/w/${icon}.png`}
            width='30'
            height='30'
            loading="lazy"
        />
    )
    // cSpell: enable
}

export default Weather
