import React from 'react'
import "./messenger.css";
import Axios from "axios";
import Conversation from "../conversations/Conversation";
import Message from "../message/Message";
import { useState, useRef, useEffect} from 'react';
import {io} from "socket.io-client";
import {useParams} from "react-router-dom";


const user = JSON.parse(localStorage.getItem("user"));

export default function Messenger() {
const [conversations, setConversations] = useState([]);
const [currentChat, setCurrentChat] = useState(null);
const [messages, setMessages] = useState([]);
const [newMessage, setNewMessage] = useState("");
const [arrivalMessage, setArrivalMessage] = useState(null);
const socket = useRef();
const scrollRef = useRef();
const { id } = useParams();

useEffect(() => {
  socket.current = io("ws://localhost:8900");
  socket.current.on("getMessage", (data) => {
    setArrivalMessage({
      sender: data.senderId,
      text: data.text,
      createdAt: Date.now(),
    });
  });
}, []);



useEffect(() => {
  arrivalMessage &&
    currentChat?.members.includes(arrivalMessage.sender) &&
    setMessages((prev) => [...prev, arrivalMessage]);
}, [arrivalMessage, currentChat]);



// useEffect(() => {
//   socket.current.emit("addUser", user._id);
//   socket.current.on("getUsers", (users) => {
//     setOnlineUsers(
//       user.followings.filter((f) => users.some((u) => u.userId ===f ))
//     );
//   });
// },[user]);

useEffect(() => {
  const get= async () => {
  if (user) {
    try {
      socket.current.emit("addUser", user._id);
     
  } catch (err) {
    console.log(err);
  }
}
  };
  get();
}, [user]);

useEffect(() => {
  const getConversations = async () => {

  if (user) {
    try {
    const res = await Axios.get(`https://devzoid.herokuapp.com/api/conversations/${user._id}`, { 
      userId: JSON.parse(localStorage.getItem("user"))._id,
    });
     setConversations(res.data);
  } catch (err) {
    console.log(err);
  }
}
  };
  getConversations();
}, [user]);


useEffect(() => {
  const getMessages = async () => {
    try {
    const res = await Axios.get("https://devzoid.herokuapp.com/api/messages/" + currentChat?._id);
    setMessages(res.data);
    } catch (err) {
         console.log(err);
    }
  };
  getMessages();
}, [currentChat]);

const handleSubmit = async (e) => {
  e.preventDefault();
  const message = {
    sender: user._id,
    text: newMessage,
    conversationId: currentChat._id,
  };

  const receiverId = currentChat.members.find(
    (member) => member !== user._id
  );

  socket.current.emit("sendMessage", {
    senderId: user._id,
    receiverId,
    text: newMessage,
  });

  try {
    const res = await Axios.post("https://devzoid.herokuapp.com/api/messages/", message);
    setMessages([...messages, res.data])
    setNewMessage("")
  } catch (err) {
    console.log(err);
  }
};


useEffect(() => {
   scrollRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages]);

    return (
        <>
            <div className="messenger">
         <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
              <div>
                {conversations.map((c) => (
                  <div onClick={() => setCurrentChat(c)}>
                  <Conversation conversations={c} currentUser={user}/>
                  </div>                
                ))}
              </div>
          </div>
         </div>
         <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
            <>
                <div className="chatBoxTop">
                      {messages.map((m) => (
                        <div ref={scrollRef}>
                      <Message message={m} own={m.sender === user._id}/>
                      </div>
                      ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
                </> 
                ) : (
                <span className='noConversationText'>
                  Open a conversation to start a chat.
                  </span>
                )}
          </div>
          </div>
        </div>
        </>
    )
}
