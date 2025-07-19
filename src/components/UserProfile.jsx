import React from 'react'

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="user-profile-image">
        <img src="/src/assets/user/Image.png" alt="Ethan Carter" />
      </div>
      
      <div className="user-info">
        <h2 className="user-name">Ethan Carter</h2>
        <p className="user-handle">@ethan_carter</p>
        
        <p className="user-bio">
          Singer-songwriter from Los Angeles. Passionate about creating music that resonates with the soul.
        </p>
      </div>
    </div>
  )
}

export default UserProfile 