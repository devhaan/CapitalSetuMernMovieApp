import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MovieCard({ movie,update, favorites, setUpdate, isLogIn, uid }) {
  const [toggler, setToggler] = useState(false);

  
  const addFav = async () => {
    if (uid === '' || uid === null) {
      alert('error in adding');
      return;
    }
    await axios.post(
      'http://localhost:8000/addfav',
      `uid=${uid}&id=${movie.id}&backdrop_path=${movie.backdrop_path}&title=${movie.title}&overview=${movie.overview}&release_date=${movie.release_date}&vote_average=${movie.vote_average},`
    );
  };

  const delFav = async () => {
    await axios.post(
      'http://localhost:8000/delfav',
      `uid=${uid}&id=${movie.id}`
    );
    setUpdate(!update);
  };
  const handleUnFavoriteClick = () => {
    
    delFav();
    
  };

  //axios.post('http://192.168.1.36:8000/delete-contact',`id=${id}`);

  const handleFavoriteClick = () => {
    addFav();
  };
  return (
    <>
      <div
        className="card p-4 m-3"
        style={{
          width: '18rem',
          boxShadow: '10px 10px 6px #314c59',
          backgroundColor: '#f5f5f5',
        }}
      >
        <img
          className="card-img-top "
          style={{
            width: 'auto',
            boxShadow: '18px 118px 180px #6dc2ed',
          }}
          src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}
          alt={movie.path}
        />
        <div className="card-body" style={{ width: 'auto' }}>
          <h5 className="card-title">{movie.title}</h5>
          <p
            className="card-text"
            onClick={() => setToggler(!toggler)}
            style={
              !toggler
                ? {
                    width: 'auto',
                    height: '5rem',
                    overflow: 'hidden',
                  }
                : { width: 'auto' }
            }
          >
            {movie.overview}
          </p>
          <p
            className="card-text"
            style={{
              width: 'auto',
            }}
          >
            <b>Release Date </b>
            {movie.release_date}
          </p>
          <p
            className="card-text"
            style={{
              width: 'auto',
            }}
          >
            <b>popularity </b>
            {movie.popularity}
          </p>
          <p className="card-text">
            <b>Rating </b>
            {movie.vote_average}
            <div className="progress">
              <div
                className="progress-bar progress-bar-animated progress-bar-striped"
                style={{ width: `${movie.vote_average * 10}%` }}
              ></div>
            </div>
          </p>
          {isLogIn && (
            <>
              {!favorites ? (
                <button
                  style={{
                    boxShadow: '1px 1px 100px blue',
                  }}
                  onClick={handleFavoriteClick}
                  className="btn btn-primary"
                >
                  Favorite
                </button>
              ) : (
                <button
                  style={{
                    boxShadow: '18px 18px 90px red',
                  }}
                  onClick={handleUnFavoriteClick}
                  className="btn btn-danger"
                >
                  Unfavorite
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default MovieCard;
