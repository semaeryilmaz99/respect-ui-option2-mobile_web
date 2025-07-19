import React from 'react'

const RecentSupporters = () => {
  const recentSupporters = [
    { id: 1, name: "Owen Parker", respect: "500 Respect", image: "/src/assets/artist/Image (6).png" },
    { id: 2, name: "Chloe Evans", respect: "450 Respect", image: "/src/assets/artist/Image (7).png" },
    { id: 3, name: "Lucas Mitchell", respect: "400 Respect", image: "/src/assets/artist/Image.png" },
    { id: 4, name: "Emma Wilson", respect: "380 Respect", image: "/src/assets/artist/Image (1).png" },
    { id: 5, name: "James Brown", respect: "360 Respect", image: "/src/assets/artist/Image (2).png" },
    { id: 6, name: "Sophia Davis", respect: "340 Respect", image: "/src/assets/artist/Image (3).png" },
    { id: 7, name: "Michael Johnson", respect: "320 Respect", image: "/src/assets/artist/Image (4).png" },
    { id: 8, name: "Isabella Garcia", respect: "300 Respect", image: "/src/assets/artist/Image (5).png" }
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

export default RecentSupporters 