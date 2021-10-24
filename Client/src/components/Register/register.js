import React from "react";
import { useState } from "react";
import Axios from "axios";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    role:"",
  });

  function signUp() {
    Axios.post("http://localhost:8000/api/user/", user)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        toast.success("user created");
        if (JSON.parse(localStorage.getItem("user")).role === "freelancer") {
          history.push("/account");
        } else {
          history.push("/clientProfilePost"); 
          }}).catch((e) => toast.error(e.message));
  }

  return (
    <div>
      <div className="container">
        <div className="">
          <img src="./signup.svg" alt="signup" className="signup-img" />
          <Link to="/login">
          <button className="log-btn">Login</button>
        </Link>
        </div>
        <div className="">
          <h1>Create Account</h1>
          <input
            type="text"
            placeholder="username"
            className="input"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          ></input>
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
          <select
            type="text"
            placeholder="role"
            className="input"
            onChange={(e) => setUser({ ...user, role: e.target.value })}
          >
            <option value="">choose</option>
            <option value="user">user</option>
            <option value="freelancer">freelancer</option>
          </select>
          <button className="sign-btn" onClick={() => signUp()}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
