import React from 'react'

const SongTopSupporters = () => {
  const supporters = [
    { id: 1, name: "Ahmet Yılmaz", respect: "120 Respect", image: "/src/assets/user/Image.png" },
    { id: 2, name: "Zeynep Demir", respect: "110 Respect", image: "/src/assets/user/Image (1).png" },
    { id: 3, name: "Mehmet Özkan", respect: "100 Respect", image: "/src/assets/user/Image (2).png" },
    { id: 4, name: "Ayşe Kaya", respect: "90 Respect", image: "/src/assets/user/Image (3).png" },
    { id: 5, name: "Mustafa Şahin", respect: "80 Respect", image: "/src/assets/user/Image (4).png" }
  ]

  return (
    <div className="top-supporters">
      <h3 className="section-title">En Çok Destekleyenler</h3>
      
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