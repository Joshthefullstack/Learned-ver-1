import React, { useState } from "react";
import style from "../styles/LoginPage.module.css";
import User from "../services/users/users";

const LoginPage = ({ setShowLandingPage }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length < 5) {
      setUserNameError("Username must be more than 5 characters");
    }
    if (password.length < 6) {
      setPasswordError("Password must be more than 6 characters");
    }
    if (email.length < 5) {
      setEmailError("Email must be more than 5 characters");
    }
    if (!email.includes('@' || !email.includes('.com'))){
      setEmailError("Email must be valid");
    }
    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
    }
    if(usernameError.length > 0 || passwordError.length > 0 || confirmPasswordError.length > 0) return;

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
            placeholder="Email"
            className={style.input}
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
              if (e.target.value.length > 5) {
                setEmailError("");
              } else{
                setEmailError("Email must be more than 5 characters");
              }
            }}
          />
          <p className={style.error}>{emailError}</p>
          <input
            placeholder="Password"
            className={style.input}
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value.length > 5) {
                setPasswordError("");
              } else{
                setPasswordError("Password must be more than 5 characters");
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
              } else{
                setUserNameError("Username must be more than 5 characters");
              }
            }}
          />
          {usernameError.length === 0 ? (
            ""
          ) : (
            <p className={style.error}>{usernameError}</p>
          )}
          <input
            placeholder="Email"
            className={style.input}
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
              if (e.target.value.length > 5) {
                setEmail("");
              }
            }}
          />
          {emailError.length === 0 ? (
            ""
          ) : (
            <p className={style.error}>{emailError}</p>
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