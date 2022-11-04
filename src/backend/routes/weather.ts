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

export interface OWMResponse {
    coord: Coord
    weather: Weather[]
    base: string
    main: Main
    visibility: number
    wind: Wind
    clouds: Clouds
    dt: number
    sys: Sys
    timezone: number
    id: number
    name: string
    cod: number
}

export interface Coord {
    lon: number
    lat: number
}

export interface Weather {
    id: number
    main: string
    description: string
    icon: string
}

export interface Main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
}

export interface Wind {
    speed: number
    deg: number
    gust: number
}

export interface Clouds {
    all: number
}

export interface Sys {
    country: string
    sunrise: number
    sunset: number
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

async function fetchWeather({ lat, lon }: { lat: number; lon: number }) {
    const url = "https://api.openweathermap.org/data/2.5/weather"
    const res = await axios.get(url, {
        params: z
            .object({
                lon: z.number(),
                lat: z.number(),
                appid: z.string(),
            })
            .parse({ lat, lon, appid: process.env.OWM_API_KEY }),
        responseType: "json",
    })

    const OWMResponse: OWMResponse = res.data

    return OWMResponse
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
            const weather = await fetchWeather({
                lat: input.latitude,
                lon: input.longitude,
            })

            return weather
        }),
})
