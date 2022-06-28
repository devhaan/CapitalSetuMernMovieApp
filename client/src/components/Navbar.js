import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RemoveCookie from '../hooks/removeCookies';

function Navbar({ isLogIn,  user,setUniUpdate,uniUpdate }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary px-5">
        <div className="container-fluid align-end">
          <Link to="/" className="navbar-brand" aria-current="page">
            CapitaL MovieS
          </Link>

          <button
            className="navbar-toggler  px-5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle 
            navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="  px-5 collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto px-5">
              <li className="nav-item  px-5">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown  px-5">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul
                  className="  px-5 dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <li className="  px-5 ">
                    <Link to="/popular" className="dropdown-item">
                      Popular
                    </Link>
                  </li>
                  <li className="  px-5 ">
                    <Link to="/latest" className="dropdown-item">
                      Latest
                    </Link>
                  </li>
                  {isLogIn && (
                    <li className="  px-5 ">
                      <Link to="/favroutes" className="dropdown-item">
                        Favourites
                      </Link>
                    </li>
                  )}
                  <li></li>
                </ul>
              </li>
              {isLogIn ? (
                <li className="  px-5 ">
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      RemoveCookie('jwtoken');
                      setUniUpdate(!uniUpdate);
                    }}
                  >
                    Log Out
                  </button>
                </li>
              ) : (
                <li className="nav-item px-5">
                  <Link
                    to="/login"
                    className="nav-link active"
                    aria-current="page"
                  >
                    <button className="btn btn-dark">SignIn/SignUp</button>
                  </Link>
                </li>
              )}
              {isLogIn && (
                <li className="nav-item active ms-5 px-5">
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/560/premium/560277.png?token=exp=1656425494~hmac=c7cf9698ecfaf0e586307350c0d5b41d"
                    alt="none"
                    style={{ width: '2rem' }}
                  />
                  &nbsp; &nbsp;
                  {user.username}
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
