"use client";
import { useEffect, useState } from "react";
import { MovieSummary } from "../types";
import axios from "axios";

const API_KEY = "826f50ac875ac781d67fa627ccd5498a";

export default function Page() {
  const [movies, setMovies] = useState<MovieSummary[]>([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}
