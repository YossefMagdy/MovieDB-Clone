import { Result } from "./result"

export interface Popular {
    page: number
  results?: Result[]
  total_pages: number
  total_results: number
}
