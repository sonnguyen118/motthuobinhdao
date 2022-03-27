import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import Layout from "./Components/Layout";

const Login = () => {
  const [panel, setPanel] = useState(true);
  const signUpButton = () => {
    setPanel(true);
  };
  const signInButton = () => {
    setPanel(false);
  };
  return (
    <Layout>
      <div className="login-wrap">
        <div
          className={
            panel ? "login-container right-panel-active" : "login-container"
          }
          id="container"
        >
          <div className="form-container sign-up-container">
            <form className="form-login" action="#">
              <h1 className="login-h1">Create Account</h1>
              <div className="social-container">
                <a href="#" className="login-a social">
                  <Image
                    className="img-login"
                    src={`/media/login-1.png`}
                    width={44}
                    height={44}
                    alt="description of image"
                  />
                </a>
                <a href="#" className="login-a social">
                  <Image
                    className="img-login"
                    src={`/media/login-2.png`}
                    width={44}
                    height={44}
                    alt="description of image"
                  />
                </a>
                <a href="#" className="login-a social">
                  <Image
                    className="img-login"
                    src={`/media/login-3.png`}
                    width={44}
                    height={44}
                    alt="description of image"
                  />
                </a>
              </div>
              <span className="login-span">
                or use your email for registration
              </span>
              <input className="login-input" type="text" placeholder="Name" />
              <input className="login-input" type="email" placeholder="Email" />
              <input
                className="login-input"
                type="password"
                placeholder="Password"
              />
              <button className="login-button">Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form className="form-login" action="#">
              <h1 className="login-h1">Sign in</h1>
              <div className="social-container">
                <a href="#" className="login-a social">
                  <Image
                    className="img-login"
                    src={`/media/login-1.png`}
                    width={44}
                    height={44}
                    alt="description of image"
                  />
                </a>
                <a href="#" className="login-a social">
                  <Image
                    className="img-login"
                    src={`/media/login-2.png`}
                    width={44}
                    height={44}
                    alt="description of image"
                  />
                </a>
                <a href="#" className="login-a social">
                  <Image
                    className="img-login"
                    src={`/media/login-3.png`}
                    width={44}
                    height={44}
                    alt="description of image"
                  />
                </a>
              </div>
              <span className="login-span">or use your account</span>
              <input className="login-input" type="email" placeholder="Email" />
              <input
                className="login-input"
                type="password"
                placeholder="Password"
              />
              <a className="login-a" href="#">
                Forgot your password?
              </a>
              <button className="login-button">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="login-h1">Welcome Back!</h1>
                <p className="login-p">
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost login-button"
                  id="signIn"
                  onClick={signInButton}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="login-h1">Hello, Friend!</h1>
                <p className="login-p">
                  Enter your personal details and start journey with us
                </p>
                <button
                  className="ghost login-button"
                  id="signUp"
                  onClick={signUpButton}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
