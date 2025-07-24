import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SongInfo = () => {
  const navigate = useNavigate()
  const { id: songId } = useParams()

  const handleSendRespect = () => {
    // Navigate to send respect page with song information as state
    navigate('/send-respect', {
      state: {
        songId: songId || '1',
        songTitle: 'Gidiyorum',
        artistName: 'Sezen Aksu',
        songCover: '/src/assets/song/Image.png',
        currentRespect: '1,247'
      }
    })
  }

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
          <button className="send-respect-button" onClick={handleSendRespect}>
            Respect Gönder
          </button>
        </div>
      </div>
    </div>
  )
}

export default SongInfo 