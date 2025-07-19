import React from 'react'

const SongTopSupporters = () => {
  const supporters = [
    { id: 1, name: "Liam Carter", respect: "120 Respect", image: "/src/assets/song/Image (5).png" },
    { id: 2, name: "Olivia Bennett", respect: "110 Respect", image: "/src/assets/song/Image (6).png" },
    { id: 3, name: "Noah Thompson", respect: "100 Respect", image: "/src/assets/song/Image (7).png" },
    { id: 4, name: "Ava Harper", respect: "90 Respect", image: "/src/assets/song/Image (10).png" },
    { id: 5, name: "Ethan Parker", respect: "80 Respect", image: "/src/assets/song/Image (11).png" }
  ]

  return (
    <div className="top-supporters">
      <h3 className="section-title">Top Supporters</h3>
      
      <div className="supporters-list">
        {supporters.map((supporter) => (
          <div key={supporter.id} className="supporter-item">
            <span className="supporter-number">{supporter.id}</span>
            
            <div className="supporter-info">
              <h4 className="supporter-name">{supporter.name}</h4>
              <p className="supporter-respect">{supporter.respect}</p>
            </div>
            
            <div className="supporter-image">
              <img src={supporter.image} alt={supporter.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SongTopSupporters 