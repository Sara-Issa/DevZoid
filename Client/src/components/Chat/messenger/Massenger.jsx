import React from 'react'
import "./messenger.css";
import Conversation from "../conversations/Conversation";
import Message from "../message/Message";
import ChatOnline from "../chatOnline/ChatOnline";

export default function Messenger() {
    return (
        <>
            <div className="messenger">
         <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
              <div>
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
              </div>
          </div>
         </div>
         <div className="chatBox">
          <div className="chatBoxWrapper">
                <div className="chatBoxTop">
                    <div >
                      <Message own={true}/>
                      <Message />
                      <Message own={true}/>
                      <Message />
                    </div>
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                  ></textarea>
                  <button className="chatSubmitButton">
                    Send
                  </button>
                </div>
          </div>
          </div>
         <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline/>
          </div>
         </div>
        </div>
        </>
    )
}
