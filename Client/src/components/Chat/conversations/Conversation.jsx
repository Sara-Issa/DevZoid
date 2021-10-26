import React from 'react'
import Axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import "./conversation.css";

export default function Conversation({conversations, currentUser}) {
const [user, setUser] = useState(null)
// maybe try saying null to the above useState, if u face a problem!!!!


useEffect(() => {
   const friendId = conversations.members.find((m) => m !== currentUser._id);
   const getUser = async () => {
     try {
     const res= await Axios("http://localhost:8000/api/user?userId=" + friendId);
     setUser(res.data.user)
   } catch(err){
     console.log(err);
   }  
  };
   getUser()
 }, [currentUser, conversations])


    return (
        <div className="conversation">
        <img
          className="conversationImg"
          src="./messages.svg"
          alt="messages"
        />
        <span className="conversationName">{user?.username}</span>
      </div>
    )
}
