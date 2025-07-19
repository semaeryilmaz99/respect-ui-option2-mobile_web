import React from 'react'

const SongRealTimeChat = () => {
  const chatMessages = [
    {
      id: 1,
      sender: "Liam Carter",
      message: "This song is amazing!",
      avatar: "/src/assets/song/Image (4).png",
      isOwn: false
    },
    {
      id: 2,
      sender: "You",
      message: "I agree, it's so powerful.",
      avatar: "/src/assets/song/Image (5).png",
      isOwn: true
    }
  ]

  return (
    <div className="real-time-chat">
      <h3 className="section-title">Real-Time Chat</h3>
      
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
          <img src="/src/assets/song/Image (6).png" alt="Your avatar" />
        </div>
        <input 
          type="text" 
          placeholder="Type a message..."
          className="chat-input"
        />
        <button className="send-button">Send</button>
      </div>
    </div>
  )
}

export default SongRealTimeChat 