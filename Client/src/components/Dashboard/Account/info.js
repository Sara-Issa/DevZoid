import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "../Profile/profile.css"
import Nav from "../Nav";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";


const token = JSON.parse(localStorage.getItem("token"));


function Info() {
  const history = useHistory();
  const [freelancer, setFreelancer] = useState({
    name: "",
    about: "",
    title: "",
    image: "",
    education: "",
    experience: "",
    skills: "",
    phone: "",
    address: "",
    website: "",
    twitter: "",
    facebook: "",
    instagram: "",
    linked: "",
    github: "",
  });
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    console.log(user);
    if (user) {
      Axios.get(`https://devzoid.herokuapp.com/api/freelancer/${user._id}`).then(
        (res) => setFreelancer(res.data.freelancer)
      );
    }
  }, [user]);

  function update(e) {
    e.preventDefault();
    const formData = new FormData();
    for (var key in freelancer) {
      formData.append(key, freelancer[key]);
    }

    Axios.put(
      `https://devzoid.herokuapp.com/api/freelancer/${user._id}?token=${token}`,
      formData
    )
      .then((response) => {
        toast.success("profile updated");
        history.push("/profile");
      })
      .catch((e) => toast.error(e.message));
  }
  return (
    <div className="info">
      <div className="info-box">
        <Nav />
      </div>
      <div className="info-box">
        <input
          className="info-upload"
          type="file"
          placeholder="Image"
          name="image"
          // value={freelancer.image}
          onChange={(e) => {
            setFreelancer({ ...freelancer, image: e.target.files[0] });
            console.log(e.target.files[0]);
          }}
        />
        <div>
          {/* name */}
          <h5 className="info-info">Name</h5>
          
          <div className="color">
          <input
            className="info-input"
            type="text"
            placeholder="name"
            value={freelancer.name}
            onChange={(e) =>
              setFreelancer({ ...freelancer, name: e.target.value })
            }
          /></div>
          {/* what they do */}
          <h5 className="info-info">title</h5>
          <div className="color">
          <input
            className="info-input"
            type="text"
            placeholder="title"
            value={freelancer.title}
            onChange={(e) =>
              setFreelancer({ ...freelancer, title: e.target.value })
            }
         /></div>
        </div>
      </div>
      <div>
        {/* About */}
        <h5 className="info-info">About</h5>
        <div className="color">
        <input
          className="info-input"
          type="text"
          placeholder="about"
          value={freelancer.about}
          onChange={(e) =>
            setFreelancer({ ...freelancer, about: e.target.value })
          }
        /></div>
        {/* education */}
        <h5 className="info-info">Education</h5>
        <div className="color">
        <input
          className="info-input"
          type="text"
          placeholder="education"
          value={freelancer.education}
          onChange={(e) =>
            setFreelancer({ ...freelancer, education: e.target.value })
          }
        /></div>
        {/* Skills */}
        <h5 className="info-info">Skills</h5>
        <div className="color">
        <input
          className="info-input"
          type="text"
          placeholder="skills"
          value={freelancer.skills}
          onChange={(e) =>
            setFreelancer({ ...freelancer, skills: e.target.value })
          }
        /></div>
        {/* Experience */}
        <h5 className="info-info">Experience</h5>
        <div className="color">
        <input
          className="info-input"
          type="text"
          placeholder="experience"
          value={freelancer.experience}
          onChange={(e) =>
            setFreelancer({ ...freelancer, experience: e.target.value })
          }
        /></div>
      </div>
      <div>
        {/* contact information */}
        <h3 className="info-info2">Contact Information</h3>
        <h5 className="info-info">Phone</h5>
        <div className="color">
        <input
          className="info-input"
          type="text"
          placeholder="phone"
          value={freelancer.phone}
          onChange={(e) =>
            setFreelancer({ ...freelancer, phone: e.target.value })
          }
        /></div>
        <h5 className="info-info">Address</h5>
        <div className="color">
        <input
          className="info-input"
          type="text"
          placeholder="address"
          value={freelancer.address}
          onChange={(e) =>
            setFreelancer({ ...freelancer, address: e.target.value })
          }
        /></div>
        <h5  className="info-info">Website</h5>
        <div className="color">
        <input
          className="info-input"
          type="text"
          placeholder="website"
          value={freelancer.website}
          onChange={(e) =>
            setFreelancer({ ...freelancer, website: e.target.value })
          }
        /></div>

        
        <div>
          
          <h3 className="info-info2">Social Media</h3>
          
          <h5  className="info-info">facebook</h5>
          <div className="color">
          <input
            className="info-input"
            type="text"
            placeholder="facebook"
            value={freelancer.facebook}
            onChange={(e) =>
              setFreelancer({ ...freelancer, facebook: e.target.value })
            }
          /></div>
          
          <h5  className="info-info">twitter</h5>
          <div className="color">
          <input
            className="info-input"
            type="text"
            placeholder="twitter"
            value={freelancer.twitter}
            onChange={(e) =>
              setFreelancer({ ...freelancer, twitter: e.target.value })
            }
          />
          </div>
          <h5  className="info-info">linked</h5>
          <div className="color">
          <input
            className="info-input"
            type="text"
            placeholder="linked"
            value={freelancer.linked}
            onChange={(e) =>
              setFreelancer({ ...freelancer, linked: e.target.value })
            }
          /></div>
          
          <h5  className="info-info">github</h5>
          <div className="color">
          <input
            className="info-input"
            type="text"
            placeholder="github"
            value={freelancer.github}
            onChange={(e) =>
              setFreelancer({ ...freelancer, github: e.target.value })
            }
          /></div>
          
          <h5  className="info-info">instagram</h5>
          <div className="color">
          <input
            className="info-input"
            type="text"
            placeholder="instagram"
            value={freelancer.instagram}
            onChange={(e) =>
              setFreelancer({ ...freelancer, instagram: e.target.value })
            }
          />
          </div>
        </div>
      </div>
      <div className="color">
        <button className="info-btn" onClick={(e) => update(e)}>
          Profile Updated
        </button>
      </div>
    </div>
  );
}

export default Info;
