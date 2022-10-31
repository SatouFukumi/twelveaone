import { useGeolocation } from "@ts/hooks"
import { useEffect, useState } from "react"
import { trpc } from "src/backend/api/trpc"

const Weather: React.FC = () => {
    const { geoPosition } = useGeolocation()
    const [coords, setCoords] = useState({
        longitude: 108.258705,
        latitude: 14.04345875,
    })

    const { isLoading, data: address } = trpc.weatherRouter.get.useQuery({
        latitude: coords.latitude,
        longitude: coords.longitude,
    })

    useEffect(() => {
        if (geoPosition?.coords) setCoords(geoPosition.coords)
    }, [geoPosition])

    // cSpell: disable
    if (!address || isLoading) return <>Mang Yang</>

    return <>{address.county}</>
    // cSpell: enable
}

export default Weather
