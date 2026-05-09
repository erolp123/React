import { useEffect, useState } from "react";
import Search from "./Components/Search";
import Spinner from "./Components/Spinner";
import MovieCard from "./Components/MovieCard";
import {useDebounce} from 'react-use'

// API - Application Programming Interface - a set of rules that allows one
// software application to talk to another
const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieLiest, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");


  // Debounce the search term to prevent making too many API requests
  // by waiting for the user to stop typing for 500ms
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

  
  const fetchMovies = async (query =' ') => {
    
    try {
      const endpoint = query 
      ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}` 
      : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      if (data.Response == "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMovieList([]);
        return;
      }
      setMovieList(data.results || []);

      console.log(data);
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage("Error fetching movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            {" "}
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the hassle{" "}
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <section className="all-movies">
          <h2 className="mt-[40]">All Movies</h2>

          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieLiest.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

const url = "https://imdb236.p.rapidapi.com/api/imdb/cast/nm0000190/titles";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "c30cbc4b0emshab85b37801fc293p1c8dbejsnbda485768cfd",
    "x-rapidapi-host": "imdb236.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}

export default App;

/*
import './App.css'
import { useState, useEffect} from 'react'
 
const Card = ({title}) => {
  const [ count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

useEffect(() => {
console.log(`${title} has been liked: ${hasLiked}`);
}, [hasLiked]);

useEffect( ()   => {
console.log('Card Rendered')

}, []);

  return (
<div className="card" onClick={() => setCount((prevState) => prevState +1 )
}>
  <h2>{title} - {count || null} </h2>

  <button onClick= {() => setHasLiked(!hasLiked)}>
    {hasLiked ? 'Liked' : 'Like'}
  </button>
</div>

  )
}




const App = () => {

  return (
    <div className='card-container'>
    <Card title="Star Wars" rating={5} isCool={true} />
    <Card title="Avatar" />
    <Card title="The Lion King" />
    </div>
  )
}
export default App */
