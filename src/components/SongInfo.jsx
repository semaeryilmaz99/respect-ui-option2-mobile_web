import React from 'react'

const SongInfo = () => {
  return (
    <div className="song-info">
      <div className="song-album-cover">
        <img src="/src/assets/song/Image.png" alt="Şarkı Kapağı" />
      </div>
      
      <div className="song-details">
        <div className="song-title-section">
          <h2 className="song-title">Gidiyorum</h2>
          <h3 className="song-subtitle">Sezen Aksu</h3>
          <p className="song-respect">1,247 Respect</p>
        </div>
        
        <div className="song-buttons">
          <button className="play-spotify-button">
            Spotify'da Dinle
          </button>
          <button className="send-respect-button">
            Respect Gönder
          </button>
        </div>
      </div>
    </div>
  )
}

export default SongInfo 