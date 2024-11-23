import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import Movie from '../components/Movie';
import axios from 'axios';

const API_URL = 'https://www.omdbapi.com/?apikey=6aa06338';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('Star Wars');
  const [resetInput, setResetInput] = useState(false);

  const fetchMovies = async (query) => {
    try {
      const response = await axios.get(`${API_URL}&s=${query}`);
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
        setError('');
      } else {
        setError(response.data.Error);
      }
      setResetInput(true);
    } catch (err) {
      setError('Failed to fetch movies.');
      setResetInput(true);
    }
  };

  useEffect(() => {
    fetchMovies(query);
  }, [query]);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('../src/assets/bg-app.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-70 min-h-screen">
        <div className="container mx-auto p-4">
          <Search
            onSearch={(newQuery) => {
              setQuery(newQuery);
              setResetInput(false);
            }}
            reset={resetInput}
          />
          {error && (
            <div className="bg-red-700 text-white p-3 rounded-md mt-6 mb-10 shadow-md max-w-sm mx-auto">
              <p className="text-center text-xl">{error}</p>
            </div>
          )}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {movies.map((movie) => (
              <Movie key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
