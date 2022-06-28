import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SetCookie from '../hooks/setCookies';
import GetCookie from '../hooks/getCookies';
import RemoveCookie from '../hooks/removeCookies';

function Authenticator({ setUniUpdate, uniUpdate }) {
  const [toggler, setToggler] = useState(true);

  //login data
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });
  const [signupForm, setSignupForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {}, []);

  const signUp = async () => {
    if (
      signupForm.password === '' &&
      signupForm.username === '' &&
      signupForm.confirmPassword === ''
    ) {
      alert('username/password must be filled');
      return;
    }
    if (signupForm.password !== signupForm.confirmPassword) {
      alert('password/ConfirmPassword must be same');
      return;
    }
    await axios.post(
      'http://localhost:8000/signup',
      `username=${signupForm.username}&password=${signupForm.password}&confirmPassword=${signupForm.confirmPassword}`
    );
  };

  const signIn = async () => {
    if (loginForm.password === '' && loginForm.username === '') {
      alert('username/password must be filled');
      return;
    }
    const data = await axios.post(
      'http://localhost:8000/login',
      `username=${loginForm.username}&password=${loginForm.password}`,
      {
        //AxiosRequestConfig parameter
        withCredentials: false, //correct

        // headers: {
        //   'Access-Control-Allow-Credentials': true
        // },
      }
    );
    if (data.data.status === 404) {
      alert('password incorrect');
      return;
    }
    const login_status = await data.data;
    console.log(data);
    RemoveCookie('jwtoken');
    //set cookie
    SetCookie('jwtoken', JSON.stringify(login_status));
    setUniUpdate(!uniUpdate);
  };
  const handleLogin = () => {
    signIn();
  };
  const handlerSignUp = () => {
    signUp();
  };
  return (
    <>
      <div
        className="container-fluid"
        style={{ width: '100%', height: '100vh', backgroundColor: '#cee6f2' }}
      >
        <div
          className="d-flex justify-content-center text-center "
          style={{ border: '1px solid #ccc' }}
        >
          <div className="m-2">
            {' '}
            <button
              onClick={() => {
                setToggler(true);
              }}
              className="btn btn-primary"
            >
              Login
            </button>
          </div>
          <div className="m-2">
            <button
              onClick={() => {
                setToggler(false);
              }}
              className="btn btn-danger"
            >
              Signup
            </button>
          </div>
        </div>

        {/* login form */}
        {toggler && (
          <div
            className="d-flex justify-content-center"
            style={{ width: '100%' }}
          >
            <div
              className="d-flex flex-column justify-content-between m-5 p-3"
              style={{ width: '50%', border: '5px double #3b6e7a' }}
            >
              <div className="mb-3">
                <label>Email address</label>
                <input
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, username: e.target.value })
                  }
                />
                <div>We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                />
              </div>
              <button
                onClick={handleLogin}
                type="submit"
                className="btn btn-primary"
              >
                Login
              </button>
            </div>
          </div>
        )}
        {/* login form */}

        {/* signup form */}
        {!toggler && (
          <>
          <div
            className="d-flex justify-content-center"
            style={{ width: '100%' }}
          >
            <div
              className="d-flex flex-column justify-content-between m-5 p-3"
              style={{ width: '50%', border: '5px double #3b6e7a' }}
            >
            <div className="mb-3">
              <label>Email address</label>
              <input
                onChange={(e) =>
                  setSignupForm({ ...signupForm, username: e.target.value })
                }
              />
              <div>We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                onChange={(e) =>
                  setSignupForm({ ...signupForm, password: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label>Confirm Password</label>
              <input
                type="password"
                onChange={(e) =>
                  setSignupForm({
                    ...signupForm,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </div>
            <button
              onClick={handlerSignUp}
              type="submit"
              className="btn btn-danger"
            >
              SignUp
            </button>
            </div>
            </div>
          </>
        )}
        {/* signup form */}
      </div>
    </>
  );
}

export default Authenticator;
