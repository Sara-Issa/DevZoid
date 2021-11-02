import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";


const user = JSON.parse(localStorage.getItem("user"));



function Menu() {
    
  const history = useHistory();
  function logout() {
    if (JSON.parse(localStorage.getItem("token") != null)) {
      localStorage.clear();
      history.push("/");
    } else {
      toast.warning("you're not logged in");
      history.push("/login"); 
    }
  }

  function goto() {
    if (JSON.parse(localStorage.getItem("user")).role !== "freelancer") {
      history.push("/clientProfile");
    } else {
      history.push("/dashboard"); 
    }
  }


    return (
        <div>
            <div className="menu-ul">
          <ul className="menu-box">
            <Link to="/">
            <li className="menu-li">Home</li>
            </Link>
            <Link to="/jobPost">
            <li className="menu-li">Post</li>
            </Link>

            <li className="menu-li">
              
           <>
            { user === null ? (
           <Link to="/register">
            <button className="nav-btn">Sign Up</button>
           </Link >
           ) : (
            <button className="nav-btn" onClick={() => logout()}>
                Logout
              </button>
              )}
           </>
            </li>


            <li className="menu-li">
           <>
            { user === null ? (
           console.log("")
            ) : (
            <button className="menu-btn" >
                < AiOutlineUser onClick={() => goto()} />
              </button>
             )}
           </>
            </li>
          </ul>
        </div>
        </div>
    )
}

export default Menu
