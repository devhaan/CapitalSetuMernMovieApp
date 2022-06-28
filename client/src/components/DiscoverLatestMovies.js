import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

function DiscoverFavoritesMovies({isLogIn, uid}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, []);
  const fetchPopular = async () => {
    const data = await axios.get('http://localhost:8000/latest');
    const movies_temp = await data.data.results;
    setMovies(movies_temp);
  };

  return (
    <div
      className="container-fluid"
      style={{ width: '100%', height: '100%', backgroundColor: '#cee6f2' }}
    >
      <div className="d-flex flex-wrap m-2 justify-content-center">
        {movies.map((movie, index) => (
          <>
            <MovieCard
              isLogIn={isLogIn}
              uid={uid}
              favorites={false}
              key={movie.id}
              movie={movie}
            ></MovieCard>
          </>
        ))}
      </div>
    </div>
  );
}

export default DiscoverFavoritesMovies;
