import React from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import "../App.css";


const user = JSON.parse(localStorage.getItem("user"));




function Nav() {

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
    <div className="nav">
      <div className="nav-container">
        <h1 className="logo">
          Dev<span className="highlight">Zoid</span>
        </h1>

        <div className="ul">
          <ul className="ul-container" style={{ textDecoration: 'none' }} >
            <Link to="/" style={{ textDecoration: 'none' }} >
            <li className="nav-li"  style={{ textDecoration: 'none' }} >Home</li>
            </Link>
            <Link to="jobPost" style={{ textDecoration: 'none' }}>
            <li className="nav-li"  style={{ textDecoration: 'none' }} >Post</li>
            </Link>

            <Link to="/menu">
            <li className="menu-li">< AiOutlineMenu/></li>
            </Link>

            <li className="nav-li">
              
              <>
               { user === null ? (
                 console.log("")
              // null
              ) : (
               <Link to="/messenger" style={{ textDecoration: 'none' }}>
               <p className="nav-li"  style={{ textDecoration: 'none' }} >Chat</p>
               </Link>
                 )}
              </>
               </li>
            <li className="nav-li">
              
           <>
            { user === null ? (
           <Link to="/register">
            <button className="nav-btn">SignUp</button>
           </Link >
           ) : (
            <button className="nav-btn" onClick={() => logout()}>
                Logout
              </button>
              )}
           </>
            </li>


            <li className="nav-li">
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
      
    </div>
  );
}

export default Nav;
