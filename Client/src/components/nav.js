import React from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

function Nav() {
  const history = useHistory();
  function logout() {
    if (JSON.parse(localStorage.getItem("token") != null)) {
      localStorage.clear();
    } else {
      toast.warning("you're not logged in");
      history.push("/login"); 
    }
  }

  return (
    <div className="nav">
      <div className="nav-flex">
        <h1 className="logo">
          Dev<span className="highlight">Zoid</span>
        </h1>

        <div className="container">
          <ul className="container">
            <Link to="/">
            <li className="nav-li">Home</li>
            </Link>
            <Link to="/about">
            <li className="nav-li">About</li>
            </Link>
            <li className="nav-li">
              <Link to="/register">
              <button className="nav-btn">Sign Up</button>
              </Link >
            </li>
            <li className="nav-li">
              <button className="nav-btn" onClick={() => logout()}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
