import axios from "axios"
import { z } from "zod"
import { publicProcedure, router } from "../router"

export interface OSMResponse {
    place_id: number
    licence: string
    osm_type: string
    osm_id: number
    lat: string
    lon: string
    display_name: string
    address: Address
    boundingbox: string[]
}

export interface Address {
    road: string
    town: string
    county: string
    state: string
    "ISO3166-2-lvl4": string
    country: string
    country_code: string
}

async function fetchAddress({ lat, lon }: { lat: number; lon: number }) {
    const url = "https://nominatim.openstreetmap.org/reverse"
    const res = await axios.get(url, {
        params: { lat, lon, format: "json" },
        responseType: "json",
    })

    const OSMResponse: OSMResponse = res.data

    return OSMResponse.address
}

export const weatherRouter = router({
    get: publicProcedure
        .input(
            z.object({
                longitude: z.number(),
                latitude: z.number(),
            })
        )
        .query(async ({ input }) => {
            const address: Address = await fetchAddress({
                lat: input.latitude,
                lon: input.longitude,
            })

            return address
        }),
})
