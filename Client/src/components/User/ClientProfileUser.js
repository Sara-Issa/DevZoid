import React from 'react'
import Axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    return (
    
     <div>
      <div>
        <img></img>
      </div>
      <div>
        <h2>{client.name}</h2>
      </div>
        <div>
          <h3>Contact Information</h3>
          {/* phone icon */} <p>{client.phone}</p>
          {/* address icon */} <p>{client.address}</p>
        </div>
      
      
    
    </div>
  );
}

export default ClientProfileUser