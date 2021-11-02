import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css";

function jobs() {
    return (
    <div className='nav4'>
        <div className="nav4-container">
            <div className="nav4-box">
                <h3 className="nav4-info">
                    looking for a job to apply <br />
                    check out posted job, and apply now.
                </h3>
                <Link to="/jobList">
                <button className="nav4-btn">Jobs</button>
                </Link>
            </div>
            <div className="nav4-box">
            <img src="./job list.svg" alt="job" className="nav4-img" />
            </div>
      </div>
    </div>
    )
}

export default jobs
