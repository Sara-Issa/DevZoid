import React from "react";
import "./login.css"
import Axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function login() {
    Axios.post("https://devzoid.herokuapp.com/api/user/login", user)
      .then((res) => {
        console.log(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        toast.success("User Logged In");
        if (JSON.parse(localStorage.getItem("user")).role === "freelancer") {
          history.push("/profile");
        } else {
          history.push("/clientProfile");
        }
      })
      .catch((e) => toast.error(e.message));
  }
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-container">
          <div className="login-box">
          <img src="./login.svg" alt="login" className="signup-img" />
          <Link to="/register">
           <button className="log-btn">Sign Up</button>
          </Link>
          </div>
        </div>
        <div className="login-container">
          <div className="login-form">
          <h1 className="login-title">Login to Account</h1>
          <input
            type="text"
            placeholder="email"
            className="input"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></input>
          <input
            type="password"
            placeholder="password"
            className="input"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          ></input>
          <button className="sign-btn" onClick={() => login()}>
            Login
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
