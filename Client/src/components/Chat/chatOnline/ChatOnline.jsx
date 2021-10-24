import React from 'react'
import "./chatOnline.css";

export default function ChatOnline() {
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
