import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import Nav from "../Nav";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineFacebook,
} from "react-icons/ai";

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
      Axios.get(`http://localhost:8000/api/freelancer/${user._id}`).then(
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
      `http://localhost:8000/api/freelancer/${user._id}?token=${token}`,
      formData
    )
      .then((response) => {
        toast.success("profile updated");
        history.push("/profile");
      })
      .catch((e) => toast.error(e.message));
  }
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        {/* profile image set default image if they don't upload one */}
        {/* this is where they upload the image */}
        <input
          className=""
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
          <input
            className="input"
            type="text"
            placeholder="name"
            value={freelancer.name}
            onChange={(e) =>
              setFreelancer({ ...freelancer, name: e.target.value })
            }
          ></input>
          {/* what they do */}
          <input
            className="input"
            type="text"
            placeholder="title"
            value={freelancer.title}
            onChange={(e) =>
              setFreelancer({ ...freelancer, title: e.target.value })
            }
          ></input>
        </div>
      </div>
      <div>
        {/* About */}
        <h5>About</h5>
        <input
          className="input"
          type="text"
          placeholder="about"
          value={freelancer.about}
          onChange={(e) =>
            setFreelancer({ ...freelancer, about: e.target.value })
          }
        ></input>
        {/* education */}
        <h5>Education</h5>
        <input
          className="input"
          type="text"
          placeholder="education"
          value={freelancer.education}
          onChange={(e) =>
            setFreelancer({ ...freelancer, education: e.target.value })
          }
        ></input>
        {/* Skills */}
        <h5>Skills</h5>
        <input
          className="input"
          type="text"
          placeholder="skills"
          value={freelancer.skills}
          onChange={(e) =>
            setFreelancer({ ...freelancer, skills: e.target.value })
          }
        ></input>
        {/* Experience */}
        <h5>Experience</h5>
        <input
          className="input"
          type="text"
          placeholder="experience"
          value={freelancer.experience}
          onChange={(e) =>
            setFreelancer({ ...freelancer, experience: e.target.value })
          }
        ></input>
      </div>
      <div>
        {/* contact information */}
        <h3>Contact Information</h3>
        <h5>Phone</h5>
        <input
          className="input"
          type="text"
          placeholder="phone"
          value={freelancer.phone}
          onChange={(e) =>
            setFreelancer({ ...freelancer, phone: e.target.value })
          }
        ></input>
        <h5>Address</h5>
        <input
          className="input"
          type="text"
          placeholder="address"
          value={freelancer.address}
          onChange={(e) =>
            setFreelancer({ ...freelancer, address: e.target.value })
          }
        ></input>
        <h5>Website</h5>
        <input
          className="input"
          type="text"
          placeholder="website"
          value={freelancer.website}
          onChange={(e) =>
            setFreelancer({ ...freelancer, website: e.target.value })
          }
        ></input>

        {/* maybe use icon too only or both icon and text */}
        <div>
          {/* Social Media */}
          <h3>Social Media</h3>
          {/* facebook icon*/}
          <AiOutlineFacebook />
          <input
            className="input"
            type="text"
            placeholder="facebook"
            value={freelancer.facebook}
            onChange={(e) =>
              setFreelancer({ ...freelancer, facebook: e.target.value })
            }
          ></input>
          {/* twitter icon */}
          <AiOutlineTwitter />
          <input
            className="input"
            type="text"
            placeholder="twitter"
            value={freelancer.twitter}
            onChange={(e) =>
              setFreelancer({ ...freelancer, twitter: e.target.value })
            }
          ></input>
          {/* linked icon */}
          <AiOutlineLinkedin />
          <input
            className="input"
            type="text"
            placeholder="linked"
            value={freelancer.linked}
            onChange={(e) =>
              setFreelancer({ ...freelancer, linked: e.target.value })
            }
          ></input>
          {/* github icon */}
          <AiOutlineGithub />
          <input
            className="input"
            type="text"
            placeholder="github"
            value={freelancer.github}
            onChange={(e) =>
              setFreelancer({ ...freelancer, github: e.target.value })
            }
          ></input>
          {/* instagram icon */}
          <AiOutlineInstagram />
          <input
            className="input"
            type="text"
            placeholder="instagram"
            value={freelancer.instagram}
            onChange={(e) =>
              setFreelancer({ ...freelancer, instagram: e.target.value })
            }
          ></input>
        </div>
      </div>
      <div>
        <button className="btn-review hover" onClick={(e) => update(e)}>
          Profile Updated
        </button>
      </div>
    </div>
  );
}

export default Info;
