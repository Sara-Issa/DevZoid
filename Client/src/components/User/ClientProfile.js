import React from 'react'
import Axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function ClientProfile() {
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

  // function deleteAccount() {
  //   Axios.delete(`http://localhost:8000/api/user/${id}`)
  // }

    return (
    <>
      <div>
        <img></img>
      </div>
      <div>
        <h2>{client.name}</h2>
          {/* phone icon */} <p>{client.phone}</p>
          {/* address icon */} <p>{client.address}</p>
      </div>
      <div>
      <Link to="/clientProfilePost">
      <button className='nav-btn'>Update Profile</button>
      </Link>
      </div>
      {/* <div>
      <button className='nav-btn' onClick={() => deleteAccount()}>Delete Account</button>
      </div> */}
    </>
  );
}

export default ClientProfile