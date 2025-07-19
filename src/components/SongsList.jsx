import React from 'react'

const SongsList = () => {
  const songs = [
    {
      id: 1,
      title: "Starlight",
      artist: "Olivia Carter",
      cover: "/src/assets/artist/Image (3).png"
    },
    {
      id: 2,
      title: "Midnight Dreams",
      artist: "Olivia Carter", 
      cover: "/src/assets/artist/Image (4).png"
    }
  ]

  return (
    <div className="songs-list">
      <h3 className="section-title">Songs</h3>
      
      <div className="songs-container">
        {songs.map((song) => (
          <div key={song.id} className="song-item">
            <div className="song-cover">
              <img src={song.cover} alt={`${song.title} cover`} />
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