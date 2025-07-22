import React from 'react'

const RecentSupporters = () => {
  const recentSupporters = [
    { id: 1, name: "Cem Özdemir", respect: "500 Respect", image: "/src/assets/user/Image.png" },
    { id: 2, name: "Zeynep Arslan", respect: "450 Respect", image: "/src/assets/user/Image (1).png" },
    { id: 3, name: "Burak Ateş", respect: "400 Respect", image: "/src/assets/user/Image (2).png" },
    { id: 4, name: "Elif Koç", respect: "380 Respect", image: "/src/assets/user/Image (3).png" },
    { id: 5, name: "Murat Bulut", respect: "360 Respect", image: "/src/assets/user/Image (4).png" },
    { id: 6, name: "Sinem Güler", respect: "340 Respect", image: "/src/assets/user/Image.png" },
    { id: 7, name: "Emre Kılıç", respect: "320 Respect", image: "/src/assets/user/Image (1).png" },
    { id: 8, name: "Gizem Şen", respect: "300 Respect", image: "/src/assets/user/Image (2).png" }
  ]

  return (
    <div className="recent-supporters">
      <h3 className="section-title">Son Destekleyenler</h3>
      
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