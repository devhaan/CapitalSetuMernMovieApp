import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

function Discover({ isLogIn, uid }) {
  const [movies, setMovies] = useState([]);
  console.log('moviecard', uid);

  useEffect(() => {
    fetchDiscover();
  }, []);
  const fetchDiscover = async () => {
    const data = await axios.get('http://localhost:8000/');
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
              favorites={false}
              key={movie.id}
              movie={movie}
              isLogIn={isLogIn}
              uid={uid}
            ></MovieCard>
          </>
        ))}
      </div>
    </div>
  );
}

export default Discover;
