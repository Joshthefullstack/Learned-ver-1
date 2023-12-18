import React, { useState } from "react";
import style from "../styles/LoginPage.module.css";
import User from "../services/users/users";

const LoginPage = ({ setShowLandingPage }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length < 5) {
      setUserNameError("Username must be more than 5 characters");
    }
    if (password.length < 6) {
      setPasswordError("Password must be more than 6 characters");
    }
    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
    }
    return;

    const user = { username, password };
    console.log(user);
  };
  return (
    <div className={style.containers}>
      <input type="checkbox" id="signup_toggle" className={style.checkbox} />
      <form className={style.form}>
        <div className={style.form_front}>
          <div className={style.form_details}>
            Login as a Learned Instructor
          </div>
          <input
            placeholder="Username"
            className={style.input}
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
              if (e.target.value.length > 5) {
                setUserNameError("");
              }
            }}
          />
          <p className={style.error}>{usernameError}</p>
          <input
            placeholder="Password"
            className={style.input}
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value.length > 5) {
                setPasswordError("");
              }
            }}
          />
          {passwordError.length === 0 ? (
            ""
          ) : (
            <p className={style.error}>{passwordError}</p>
          )}
          <button onClick={(e) => handleSubmit(e)} className={style.btn}>
            Login
          </button>
          <span className={style.switch}>
            Don't have an account?
            <label className={style.signup_tog} htmlFor="signup_toggle">
              Sign Up
            </label>
          </span>
        </div>
        <div className={style.form_back}>
          <div className={style.form_details}>
            SignUp as a Learned Instructor
          </div>
          <input
            placeholder="Username"
            className={style.input}
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
              if (e.target.value.length > 5) {
                setUserNameError("");
              }
            }}
          />
          {usernameError.length === 0 ? (
            ""
          ) : (
            <p className={style.error}>{usernameError}</p>
          )}
          <input
            placeholder="Password"
            className={style.input}
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value.length > 5) {
                setPasswordError("");
              }
            }}
          />
          {passwordError.length === 0 ? (
            ""
          ) : (
            <p className={style.error}>{passwordError}</p>
          )}
          <input
            placeholder="Confirm Password"
            className={style.input}
            type="text"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (e.target.value.length > 5) {
                setConfirmPasswordError("");
              }
            }}
          />
          {confirmPasswordError.length === 0 ? (
            ""
          ) : (
            <p className={style.error}>{confirmPasswordError}</p>
          )}
          <button onClick={(e) => handleSubmit(e)} className={style.btn2}>
            Signup
          </button>
          <span className={style.switch}>
            Already have an account?
            <label className={style.signup_tog} htmlFor="signup_toggle">
              Login
            </label>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
