import React from 'react'

const SongsList = () => {
  const songs = [
    {
      id: 1,
      title: "Gidiyorum",
      artist: "Sezen Aksu",
      cover: "/src/assets/song/Image.png"
    },
    {
      id: 2,
      title: "Şarkı Söyleyemem",
      artist: "Sezen Aksu", 
      cover: "/src/assets/song/Image (1).png"
    },
    {
      id: 3,
      title: "Kaybolan Yıllar",
      artist: "Sezen Aksu", 
      cover: "/src/assets/song/Image (2).png"
    }
  ]

  return (
    <div className="songs-list">
      <h3 className="section-title">Şarkılar</h3>
      
      <div className="songs-container">
        {songs.map((song) => (
          <div key={song.id} className="song-item">
            <div className="song-cover">
              <img src={song.cover} alt={`${song.title} kapağı`} />
            </div>
            
            <div className="song-info">
              <h4 className="song-title">{song.title}</h4>
              <p className="song-artist">{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SongsList 