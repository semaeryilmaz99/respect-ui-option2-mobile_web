import React from 'react'

const FeedCard = ({ type, title, buttonText, profileImage }) => {
  const getCardLabel = (type) => {
    switch (type) {
      case 'respect-activity':
        return 'Respect Activity Card'
      case 'chat-reply':
        return 'Chat Reply Card'
      case 'new-release':
        return 'New Release Card'
      case 'followed-respect':
        return 'Followed Respect Card'
      case 'followed-new-song':
        return 'Followed New Song Card'
      case 'followed-chat':
        return 'Followed Chat Card'
      case 'trending-song':
        return 'Trending Song Card'
      case 'trending-artist':
        return 'Trending Artist Card'
      case 'respect-notification':
        return 'Respect Notification Card'
      default:
        return 'Activity Card'
    }
  }

  return (
    <div className="feed-card" data-type={type}>
      <div className="card-label">
        {getCardLabel(type)}
      </div>
      
      <div className="card-content">
        <div className="card-top">
          <div className="card-text">
            <h3 className="card-title">{title}</h3>
          </div>
          
          <div className="profile-image-container">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="profile-image"
            />
          </div>
        </div>
        
        <button className="card-button">
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default FeedCard 