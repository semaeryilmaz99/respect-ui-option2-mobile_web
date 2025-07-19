import React from 'react'

const SongInfo = () => {
  return (
    <div className="song-info">
      <div className="song-album-cover">
        <img src="/src/assets/song/Image.png" alt="Song Cover" />
      </div>
      
      <div className="song-details">
        <div className="song-title-section">
          <h2 className="song-title">HENRY THE LEE</h2>
          <h3 className="song-subtitle">Klostrofobik Kapılumbağa</h3>
          <p className="song-respect">1200 Respect</p>
        </div>
        
        <div className="song-buttons">
          <button className="play-spotify-button">
            Play on Spotify
          </button>
          <button className="send-respect-button">
            Send Respect
          </button>
        </div>
      </div>
    </div>
  )
}

export default SongInfo 