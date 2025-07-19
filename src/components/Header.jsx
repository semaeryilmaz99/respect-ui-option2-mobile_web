import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <button className="menu-button">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        <h1 className="app-title">Respect Müzik</h1>
        
        <div className="user-avatar">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="User" />
        </div>
      </div>
      
      <div className="search-container">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="sanatçı, şarkı veya kullanıcı ara"
            className="search-input"
          />
        </div>
      </div>
    </header>
  )
}

export default Header 