import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ movie }) => {
  return (
    <div className="flex flex-col justify-between h-full p-4 bg-zinc-200 rounded-lg shadow-md">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'}
        alt={movie.Title}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2 text-center truncate">
        {movie.Title}
      </h3>
      <Link
        to={`/movie/${movie.imdbID}`}
        className="mt-auto text-center py-2 px-4 bg-orange-700 text-white rounded hover:bg-orange-800"
      >
        View Details
      </Link>
    </div>
  );
};

export default Movie;
