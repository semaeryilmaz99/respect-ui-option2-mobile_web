import React from 'react'

const BottomNavigation = () => {
  return (
    <nav className="bottom-navigation">
      <button className="nav-item">
        <div className="nav-icon">🏠</div>
        <span className="nav-label">Home</span>
      </button>
      
      <button className="nav-item">
        <div className="nav-icon">🔍</div>
        <span className="nav-label">Search</span>
      </button>
      
      <button className="nav-item active">
        <div className="nav-icon">👤</div>
        <span className="nav-label">Profile</span>
      </button>
    </nav>
  )
}

export default BottomNavigation 