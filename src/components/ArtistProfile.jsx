import React from 'react'

const ArtistProfile = () => {
  return (
    <div className="artist-profile">
      <div className="artist-profile-image">
        <img src="/src/assets/artist/Image.png" alt="Sezen Aksu" />
      </div>
      
      <div className="artist-info">
        <h2 className="artist-name">Sezen Aksu</h2>
        <p className="artist-respect">1,345 Respect</p>
        
        <p className="artist-description">
          Sezen Aksu, Türk pop müziğinin efsanevi sanatçısıdır. Etkileyici sesi ve duygusal şarkılarıyla milyonlarca insanın kalbine dokunmuş, Türk müziğinin vazgeçilmez isimlerinden biri olmuştur.
        </p>
        
        <button className="send-respect-button">
          Respect Gönder
        </button>
      </div>
    </div>
  )
}

export default ArtistProfile 