import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=6aa06338&i=${id}`);
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
           style={{ backgroundImage: "url('../src/assets/bg-app.jpg')" }}>
        <div className="bg-black bg-opacity-70 text-white p-4 rounded-md">
          Loading movie details...
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
           style={{ backgroundImage: "url('../src/assets/bg-app.jpg')" }}>
        <div className="bg-black bg-opacity-70 text-white p-4 rounded-md">
          Movie details not found.
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('../src/assets/bg-app.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-70 min-h-screen pt-10">
        <div className="p-6 max-w-4xl mx-auto bg-zinc-200 shadow-md rounded-lg">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'}
              alt={movie.Title}
              className="w-full md:w-1/3 object-cover rounded-md"
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">{movie.Title}</h1>
              <p className="text-gray-600">
                <span className="font-semibold">Released:</span> {movie.Released}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Genre:</span> {movie.Genre}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Director:</span> {movie.Director}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Actors:</span> {movie.Actors}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Plot:</span> {movie.Plot}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">IMDB Rating:</span> {movie.imdbRating}
              </p>
              <button
                onClick={() => navigate('/')}
                className="self-start mt-4 px-4 py-2 bg-orange-700 text-white rounded-lg hover:bg-orange-800"
              >
                Back to Movie List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
