import axios from "axios";
import type { Movie } from "../types/movie";

interface FetchMovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const myKey = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMovies = async (
  query: string,
  page: number,
): Promise<FetchMovieResponse> => {
  const response = await axios.get<FetchMovieResponse>(
    `https://api.themoviedb.org/3/search/movie`,
    {
      params: {
        query,
        language: "en-US",
        page,
      },
      headers: {
        Authorization: `Bearer ${myKey}`,
        accept: "application/json",
      },
    },
  );
  return response.data;
};
