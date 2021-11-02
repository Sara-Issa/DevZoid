import React from 'react'
import Axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ClientProfileUser() {
  const [client, setClient] = useState({});
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    if (id) {
    Axios.get(`http://localhost:8000/api/client/${id}`).then((res) => {
      console.log(res.data.client);
      localStorage.setItem("client", JSON.stringify(res.data.client));  
      setClient(res.data.client);
      // add loading thingy later
     
    });
  }
  }, [id]);


  const handleClick = async () => {
    try {
        await Axios.post("http://localhost:8000/api/conversations", {
        senderId: JSON.parse(localStorage.getItem("user"))._id,
        receiverId: id,
      })
    } catch (err) {
      console.log(err);
    }
  };

    return (
    
     <div className="clientUser">
      <div  className="clientUser-box">
        <img className="clientUser-img" src={`http://localhost:8000/${client.image}`}  alt="profile-image"></img>
      </div>
      <div  className="clientUser-box">
        <h2  className="clientUser-name">{client.name}</h2>
      </div>
        <div  className="clientUser-box">
          <h3  className="clientUser-title">Contact Information</h3>
          {/* phone icon */} <p  className="clientUser-info">{client.phone}</p>
          {/* address icon */} <p className="clientUser-info">{client.address}</p>
        </div>
        <div  className="clientUser-box">
       <Link to="/messenger">
       <button  className="clientUser-btn"onClick={() => handleClick()}>Send me your proposal</button>
       </Link>
      </div>
      
    
    </div>
  );
}

export default ClientProfileUser