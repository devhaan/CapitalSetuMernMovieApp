import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Authenticator from './Authenticator';
import Discover from './Discover';
import DiscoverPopularMovies from './DiscoverPopularMovies';
import DiscoverLatestMovies from './DiscoverLatestMovies';
import DiscoverFavoritesMovies from './DiscoverFavoritesMovies';
import Navbar from './Navbar';
import GetCookie from '../hooks/getCookies';

function App() {
  let checkUser = GetCookie('jwtoken');
  const [isLogIn, setIsLogIn] = useState(
    checkUser === undefined ? false : true
  );
  const [user, setUser] = useState(
    checkUser === undefined ? {} : JSON.parse(checkUser)
  );
  const [uniUpdate, setUniUpdate] = useState();

  useEffect(() => {
    checkUser = GetCookie('jwtoken');
    setIsLogIn(checkUser === undefined ? false : true);
    setUser(checkUser === undefined ? {} : JSON.parse(checkUser));
  }, [uniUpdate]);

  return (
    <>
      <Navbar
        isLogIn={isLogIn}
        setUniUpdate={setUniUpdate}
        user={user}
        uniUpdate={uniUpdate}
      ></Navbar>
      <Routes>
        <Route
          exact
          path="/login"
          element={
            isLogIn ? (
              <Discover isLogIn={isLogIn} uid={user._id} />
            ) : (
              <Authenticator
                uniUpdate={uniUpdate}
                setUniUpdate={setUniUpdate}
              />
            )
          }
        />
        <Route
          index
          exact
          path="/"
          element={<Discover isLogIn={isLogIn} uid={user._id} />}
        />
        <Route
          exact
          path="/popular"
          element={<DiscoverPopularMovies isLogIn={isLogIn} uid={user._id} />}
        />
        <Route
          exact
          path="/latest"
          element={<DiscoverLatestMovies isLogIn={isLogIn} uid={user._id} />}
        />
        <Route
          exact
          path="/favroutes"
          element={<DiscoverFavoritesMovies isLogIn={isLogIn} uid={user._id} />}
        />
      </Routes>
    </>
  );
}

export default App;
