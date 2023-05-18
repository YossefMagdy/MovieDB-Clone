import { ResultReviw } from "./result-reviw"


export interface Reviews {
  id: number
  page: number
  results: ResultReviw[]
  total_pages: number
  total_results: number
}
