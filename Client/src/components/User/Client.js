import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import "./client.css"

const token = JSON.parse(localStorage.getItem("token"));
const user = (JSON.parse(localStorage.getItem("user")));


function Client() {
  const history = useHistory();
  const [client, setClient] = useState({
    name: "",
    image: "",
    phone: "",
    address: "",
  });
  

  useEffect(() => {
    if (user) {
      Axios.get(`https://devzoid.herokuapp.com/api/client/${user._id}`).then(
        (res) => setClient(res.data.client),
      );
    }
     
  }, [user]);

  function save(e) {
    e.preventDefault();
    const formData = new FormData();
    for (var key in client) {
      formData.append(key, client[key]);
    }

    Axios.put(
      `https://devzoid.herokuapp.com/api/client/${user._id}?token=${token}`,
      formData
    )
      .then((response) => {
        toast.success("client updated");
        history.push("/clientProfile");
      })
      .catch((e) => toast.error(e.message));
  }
  return (
    <div className="clientProfile">
      <div  className="clientProfile-box">
        <div className="color">
        <input
          className="clientProfile-upload"
          type="file"
          placeholder="Image"
          name="image"
          onChange={(e) => {
            setClient({ ...client, image: e.target.files[0] });
            console.log(e.target.files[0]);
          }}
        />
        </div>
        <div>
        <h5 className="clientProfile-title">Name</h5>
        <div className="color">
          <input
            className="clientProfile-input"
            type="text"
            placeholder="name"
            value={client.name}
            onChange={(e) =>
              setClient({ ...client, name: e.target.value })
            }
          /></div>
        <h5 className="clientProfile-title">Phone</h5>
        <div className="color">
        <input
          className="clientProfile-input"
          type="text"
          placeholder="phone"
          value={client.phone}
          onChange={(e) =>
            setClient({ ...client, phone: e.target.value })
          }
        /></div>
        <h5 className="clientProfile-title">Address</h5>
        <div className="color">
        <input
          className="clientProfile-input"
          type="text"
          placeholder="address"
          value={client.address}
          onChange={(e) =>
            setClient({ ...client, address: e.target.value })
          }
        /></div>
        </div>
      </div>
      <div className="clientProfile-box">
        <button  className="clientProfile-btn" onClick={(e) => save(e)}>
          Profile Save
        </button>
      </div>
    </div>
  );
}

export default Client;

