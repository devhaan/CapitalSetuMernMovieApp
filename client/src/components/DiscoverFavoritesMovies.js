import React, { useState, useEffect }from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

function DiscoverFavoritesMovies({uid ,isLogIn}) {
  const [favmovies, setFavMovies] = useState([]);
  const [update,setUpdate]= useState(false);
  useEffect(() => {
    fetchPopular();
    //console.log(length);
   
  }, [update]);
  const fetchPopular = async () => {
    const data = await axios.post('http://localhost:8000/favmovies',`uid=${uid}`);
    const fav_movies_temp = await data.data;
    setFavMovies(fav_movies_temp);
    console.log(fav_movies_temp)
  };

  return <>


<div
      className="container-fluid"
      style={{ width: '100%', height: '100%', backgroundColor: '#cee6f2' }}
    >
      <div className="d-flex flex-wrap m-2 justify-content-center">
        {favmovies.map((movie) => (
          <>
            <MovieCard isLogIn={isLogIn} update={update} uid={uid} setUpdate={setUpdate} key={movie.id} movie={movie} favorites={true}></MovieCard>
          </>
        ))}
      </div>
    </div>
  </>
}

export default DiscoverFavoritesMovies;
