import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

function footer() {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="row">
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="ul-main">
              <li className="li-main">
                <a>
                  <i className="fas fa-map-marker-alt"></i> Jigjiga Yar Hargeisa,
                  Somalia</a
                >
              </li>
              <li className="li-main">
                <a
                  ><i className="fas fa-envelope"></i>
                  Devzoid@gmail.com</a
                >
              </li>
              <li className="li-main">
                <a> <i className="fas fa-phone-alt"></i> 252 63 xxx xxxx</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>User Guidelines</h4>
            <ul className="ul-main">
              <BrowserRouter>
              <Link to="/privacy">
              <li className="li-main"><a href="">Privacy</a></li>
              </Link>
              <Link to="/terms">
              <li className="li-main">
                <a href="">Terms & Conditions</a>
              </li>
              </Link>
              <Link to="/about">
              <li className="li-main"><a href="">About</a></li>
              </Link>
              </BrowserRouter>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <ul className="ul-main">
                <li className="li-main">
                  <a href=""
                    ><i className="fab fa-facebook"></i
                  ></a>
                </li>
                <li className="li-main">
                  <a href=""
                    ><i className="fab fa-instagram"></i
                  ></a>
                </li>
                <li className="li-main">
                  <a href=""
                    ><i className="fab fa-twitter"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer
