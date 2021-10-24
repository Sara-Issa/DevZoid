import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const token = JSON.parse(localStorage.getItem("token"));

function Client() {
  const history = useHistory();
  const [client, setClient] = useState({
    name: "",
    image: "",
    phone: "",
    address: "",
  });
  const [user, setUser] = useState();
  const [userId, setUserId] = useState();
  

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    console.log(user);
    if (user) {
      Axios.get(`http://localhost:8000/api/client/${user._id}`).then(
        (res) => setClient(res.data.client),
        (res) => setUserId(res.data.client._id)
      );
    }
     
  }, []);

  function save(e) {
    e.preventDefault();
    const formData = new FormData();
    for (var key in client) {
      formData.append(key, client[key]);
    }

    Axios.put(
      `http://localhost:8000/api/client/${user._id}?token=${token}`,
      formData
    )
      .then((response) => {
        toast.success("client updated");
        history.push("/client");
      })
      .catch((e) => toast.error(e.message));
  }
  return (
    <div>
      <div>
        <input
          className=""
          type="file"
          placeholder="Image"
          name="image"
          onChange={(e) => {
            setClient({ ...client, image: e.target.files[0] });
            console.log(e.target.files[0]);
          }}
        />
        
        <div>
          <input
            className="input"
            type="text"
            placeholder="name"
            value={client.name}
            onChange={(e) =>
              setClient({ ...client, name: e.target.value })
            }
          />
        <h5>Phone</h5>
        <input
          className="input"
          type="text"
          placeholder="phone"
          value={client.phone}
          onChange={(e) =>
            setClient({ ...client, phone: e.target.value })
          }
        />
        <h5>Address</h5>
        <input
          className="input"
          type="text"
          placeholder="address"
          value={client.address}
          onChange={(e) =>
            setClient({ ...client, address: e.target.value })
          }
        />
        </div>
      </div>
      <div>
        <button className="btn-review hover" onClick={(e) => save(e)}>
          Profile Save
        </button>
      </div>
    </div>
  );
}

export default Client;

