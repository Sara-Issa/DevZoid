import React from 'react'
import Axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


const user = JSON.parse(localStorage.getItem("user"));

function ClientProfile() {
  const [client, setClient] = useState({});

  useEffect(() => {
    if (user) {
    Axios.get(`http://localhost:8000/api/client/${user._id}`).then((res) => {
      console.log(res.data.client);
      localStorage.setItem("client", JSON.stringify(res.data.client));  
      setClient(res.data.client);
      // add loading thingy later
     
    });
  }
  }, [user]);

 

    return (
    <>
    <div className="client">
      <div className="client-box">
        <img className="client-img" src={`http://localhost:8000/${client.image}`}  alt="profile-image" ></img>
      </div>
      <div className="client-box">
        <h2 className="client-name">{client.name}</h2>
          {/* phone icon */} <p className="client-info">{client.phone}</p>
          {/* address icon */} <p className="client-info">{client.address}</p>
      </div>
      <div className="client-box">
      <Link to="/clientProfilePost">
      <button  className="client-btn">Update Profile</button>
      </Link>
      </div>
      </div>
    </>
  );
}

export default ClientProfile