import React from 'react'

const SongRecentSupporters = () => {
  const recentSupporters = [
    { id: 1, name: "Sophia Clark", respect: "10 Respect", image: "/src/assets/song/Image (12).png" },
    { id: 2, name: "Jackson Reed", respect: "8 Respect", image: "/src/assets/song/Image (13).png" },
    { id: 3, name: "Isabella Hayes", respect: "6 Respect", image: "/src/assets/song/Image (1).png" },
    { id: 4, name: "Aiden Foster", respect: "4 Respect", image: "/src/assets/song/Image (2).png" },
    { id: 5, name: "Mia Coleman", respect: "2 Respect", image: "/src/assets/song/Image (3).png" }
  ]

  return (
    <div className="recent-supporters">
      <h3 className="section-title">Recent Supporters</h3>
      
      <div className="recent-supporters-grid">
        {recentSupporters.map((supporter) => (
          <div key={supporter.id} className="recent-supporter-item">
            <div className="recent-supporter-image">
              <img src={supporter.image} alt={supporter.name} />
            </div>
            <h4 className="recent-supporter-name">{supporter.name}</h4>
            <p className="recent-supporter-respect">{supporter.respect}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SongRecentSupporters 