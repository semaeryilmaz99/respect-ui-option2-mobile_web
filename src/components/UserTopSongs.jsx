import React from 'react'

const UserTopSongs = () => {
  const topSongs = [
    { id: 1, title: "Midnight Serenade", respect: "87 Respect", cover: "/src/assets/user/Image (1).png" },
    { id: 2, title: "Echoes of the Past", respect: "75 Respect", cover: "/src/assets/user/Image (2).png" },
    { id: 3, title: "Whispered Dreams", respect: "63 Respect", cover: "/src/assets/user/Image (3).png" }
  ]

  return (
    <div className="user-top-songs">
      <h3 className="section-title">Songs They've Sent the Most Respect To</h3>
      
      <div className="top-songs-grid">
        {topSongs.map((song) => (
          <div key={song.id} className="top-song-card">
            <div className="top-song-cover">
              <img src={song.cover} alt={`${song.title} cover`} />
            </div>
            <h4 className="top-song-title">{song.title}</h4>
            <p className="top-song-respect">{song.respect}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserTopSongs 