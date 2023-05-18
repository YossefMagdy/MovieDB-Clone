import { MovieResult } from './movie-result';

export interface Movie {
    page: number
  results: MovieResult[]
  total_pages: number
  total_results: number
}
