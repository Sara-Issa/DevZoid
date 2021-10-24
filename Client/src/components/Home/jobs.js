import React from 'react'
import { Link } from 'react-router-dom'

function jobs() {
    return (
    <div className='space'>
        <div className="container">
            <div>
                <h3>
                    looking for a job to apply <br />
                    check out posted job, and apply now.
                </h3>
                <Link to="/jobList">
                <button className="nav-btn">Jobs</button>
                </Link>
            </div>
            <div>
            <img src="./job list.svg" alt="job" className="nav-img" />
            </div>
      </div>
    </div>
    )
}

export default jobs
