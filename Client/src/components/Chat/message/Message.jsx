import React from 'react'
import "./message.css";

export default function Message({own}) {
    return (
        <div className={own ? "message own" : "message"}>
        <div className="messageTop">
          <img
            className="messageImg"
            src="./messages.svg"
            alt="messages"
          />
          <p className="messageText">Hello, my name is Dori</p>
        </div>
        <div className="messageBottom">16 min ago</div>
      </div>
    )
}
