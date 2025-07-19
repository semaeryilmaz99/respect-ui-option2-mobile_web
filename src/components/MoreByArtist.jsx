import React from 'react'

const MoreByArtist = () => {
  const songs = [
    {
      id: 1,
      title: "Rise Up",
      artist: "Album Name",
      cover: "/src/assets/song/Image (1).png"
    },
    {
      id: 2,
      title: "Believe",
      artist: "Album Name",
      cover: "/src/assets/song/Image (2).png"
    },
    {
      id: 3,
      title: "Dreams",
      artist: "Album Name",
      cover: "/src/assets/song/Image (3).png"
    },
    {
      id: 4,
      title: "Midnight",
      artist: "Album Name",
      cover: "/src/assets/song/Image (4).png"
    }
  ]

  return (
    <div className="more-by-artist">
      <h3 className="section-title">More by this Artist</h3>
      
      <div className="artist-songs-container">
        {songs.map((song) => (
          <div key={song.id} className="artist-song-item">
            <div className="artist-song-cover">
              <img src={song.cover} alt={`${song.title} cover`} />
            </div>
            
            <div className="artist-song-info">
              <h4 className="artist-song-title">{song.title}</h4>
              <p className="artist-song-artist">{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MoreByArtist 