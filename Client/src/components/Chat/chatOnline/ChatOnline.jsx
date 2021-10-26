import Axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import "./chatOnline.css";

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
const [friends, setFriends] = useState([]);
const [onlineFriends, setOnlineFriends] = useState([]);


useEffect(() => {
const getFriends = async () => {
  const res = await Axios.get("http://localhost:8000/api/user/friends/" + currentId);
  setFriends(res.data);
};
getFriends();
}, [currentId]);

console.log(friends);


    return (
        <>
        <div className="chatOnline">
          <div className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
              <img
                className="chatOnlineImg"
                src="./messages.svg"
                alt="messages"
              />
              <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">Nimo</span>
          </div>
      </div>
      <div className="chatOnline">
          <div className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
              <img
                className="chatOnlineImg"
                src="./messages.svg"
                alt="messages"
              />
              <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">Mike</span>
          </div>
      </div>
      <div className="chatOnline">
          <div className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
              <img
                className="chatOnlineImg"
                src="./messages.svg"
                alt="messages"
              />
              <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">Nick</span>
          </div>
      </div>
      </>
    )
}
