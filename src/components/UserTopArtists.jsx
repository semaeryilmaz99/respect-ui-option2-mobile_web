import React from 'react'

const UserTopArtists = () => {
  const topArtists = [
    { id: 1, name: "Liam Harper", respect: "123 Respect", image: "/src/assets/user/Image (1).png" },
    { id: 2, name: "Olivia Bennett", respect: "102 Respect", image: "/src/assets/user/Image (2).png" },
    { id: 3, name: "Noah Thompson", respect: "98 Respect", image: "/src/assets/user/Image (3).png" },
    { id: 4, name: "Emma Wilson", respect: "87 Respect", image: "/src/assets/user/Image (4).png" }
  ]

  return (
    <div className="user-top-artists">
      <h3 className="section-title">Artists They've Sent the Most Respect To</h3>
      
      <div className="top-artists-grid">
        {topArtists.map((artist) => (
          <div key={artist.id} className="top-artist-card">
            <div className="top-artist-image">
              <img src={artist.image} alt={artist.name} />
            </div>
            <h4 className="top-artist-name">{artist.name}</h4>
            <p className="top-artist-respect">{artist.respect}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserTopArtists 