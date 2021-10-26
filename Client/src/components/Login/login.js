import React from "react";
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
    Axios.post("http://localhost:8000/api/user/login", user)
      .then((res) => {
        console.log(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        toast.success("User Logged In");
        if (JSON.parse(localStorage.getItem("user")).role === "freelancer") {
          history.push("/profile");
        } else {
          history.push("/");
        }
      })
      .catch((e) => toast.error(e.response.data.message));
  }
  return (
    <div>
      <div className="container">
        <div className="">
          <img src="./login.svg" alt="login" className="signup-img" />
          <Link to="/register">
          <button className="log-btn">Sign Up</button>
        </Link>
        </div>
        <div className="">
          <h1>Login to Account</h1>
          <input
            type="text"
            placeholder="email"
            className="input"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></input>
          <input
            type="text"
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
  );
}

export default Login;
