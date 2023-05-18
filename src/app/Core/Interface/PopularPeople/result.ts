import { Knownfor } from "./knownfor"

export interface Result {
    adult?: boolean
    gender?: number
    id?: number
    known_for?: Knownfor[]
    known_for_department?: string
    name?: string
    popularity?: number
    profile_path?: string
}
