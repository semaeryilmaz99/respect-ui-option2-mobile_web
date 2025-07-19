import React from 'react'

const ArtistProfile = () => {
  return (
    <div className="artist-profile">
      <div className="artist-profile-image">
        <img src="/src/assets/artist/Image.png" alt="Olivia Carter" />
      </div>
      
      <div className="artist-info">
        <h2 className="artist-name">Olivia Carter</h2>
        <p className="artist-respect">1,345 Respect</p>
        
        <p className="artist-description">
          Olivia Carter is a rising pop star known for her catchy tunes and heartfelt lyrics. She has captivated audiences worldwide with her unique voice and relatable songs.
        </p>
        
        <button className="send-respect-button">
          Send Respect
        </button>
      </div>
    </div>
  )
}

export default ArtistProfile 