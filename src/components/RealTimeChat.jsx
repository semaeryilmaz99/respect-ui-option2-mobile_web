import React, { useState } from 'react'

const RealTimeChat = () => {
  const [isOpen, setIsOpen] = useState(true)

  const chatMessages = [
    {
      id: 1,
      sender: "Ethan Harper",
      message: "Olivia, your new single is amazing! Keep up the great work.",
      avatar: "/src/assets/artist/Image (1).png",
      isOwn: false
    },
    {
      id: 2,
      sender: "Olivia Carter",
      message: "Thank you so much, Ethan! I appreciate your support.",
      avatar: "/src/assets/artist/Image.png",
      isOwn: true
    }
  ]

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`real-time-chat ${isOpen ? 'open' : 'closed'}`}>
      <h3 className="section-title chat-toggle" onClick={toggleChat}>
        Real-Time Chat
        <span className={`toggle-icon ${isOpen ? 'open' : 'closed'}`}>
          {isOpen ? '▼' : '▲'}
        </span>
      </h3>
      
      <div className="chat-content">
        <div className="chat-messages">
          {chatMessages.map((message) => (
            <div key={message.id} className={`chat-message ${message.isOwn ? 'own-message' : 'other-message'}`}>
              <div className="message-avatar">
                <img src={message.avatar} alt={message.sender} />
              </div>
              
              <div className="message-content">
                <div className="message-sender">{message.sender}</div>
                <div className="message-text">{message.message}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="chat-input-container">
          <div className="chat-input-avatar">
            <img src="/src/assets/artist/Image (2).png" alt="Your avatar" />
          </div>
          <input 
            type="text" 
            placeholder="Type a message..."
            className="chat-input"
          />
          <button className="send-button">Send</button>
        </div>
      </div>
    </div>
  )
}

export default RealTimeChat 