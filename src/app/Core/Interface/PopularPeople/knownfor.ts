import { Cast } from "../cast"
import { Crew } from "../crew"

export interface Knownfor {
    adult?: boolean
    cast: Cast[]
    crew: Crew[]
    backdrop_path?: string
    genre_ids: number[]
    id: number
    media_type: string
    original_language: string
    original_title?: string
    overview: string
    poster_path: string
    release_date?: string
    title?: string
    video?: boolean
    vote_average: number
    vote_count: number
    first_air_date?: string
    name?: string
    origin_country?: string[]
    original_name?: string
}
