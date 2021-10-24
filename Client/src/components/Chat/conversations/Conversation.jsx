import React from 'react'
import "./conversation.css";

export default function Conversation() {
    return (
        <div className="conversation">
        <img
          className="conversationImg"
          src="./messages.svg"
          alt="messages"
        />
        <span className="conversationName">Nimo</span>
      </div>
    )
}
