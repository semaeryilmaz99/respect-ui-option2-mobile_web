import React from 'react'
import Header from './Header'
import FeedCard from './FeedCard'
import BottomNavigation from './BottomNavigation'

const FeedPage = () => {
  // Sample feed data
  const feedData = [
    {
      type: 'respect-activity',
      title: 'Ahmet Kaya - İşte Gidiyorum Çeşmi Siyahım şarkısına 5 respect gönderdi',
      buttonText: 'Dinle',
      profileImage: '/src/assets/user/Image.png'
    },
    {
      type: 'chat-reply',
      title: 'Sezen Aksu - Gidiyorum şarkısında yeni bir mesaja cevap verdi',
      buttonText: 'Sohbete Katıl',
      profileImage: '/src/assets/artist/Image.png'
    },
    {
      type: 'new-release',
      title: 'Tarkan yeni şarkısını yayınladı: "Yeni Aşk"',
      buttonText: 'Dinle',
      profileImage: '/src/assets/artist/Image (1).png'
    },
    {
      type: 'followed-respect',
      title: 'Takip ettiğin kullanıcı Ajda Pekkan - Bambaşka şarkısına respect gönderdi',
      buttonText: 'Dinle',
      profileImage: '/src/assets/user/Image (1).png'
    },
    {
      type: 'followed-new-song',
      title: 'Barış Manço - Gülpembe şarkısını yeni keşfetti',
      buttonText: 'Dinle',
      profileImage: '/src/assets/user/Image (2).png'
    },
    {
      type: 'followed-chat',
      title: 'Takip ettiğin kullanıcı Cem Karaca - Tamirci Çırağı şarkısında sohbete katıldı',
      buttonText: 'Sohbete Katıl',
      profileImage: '/src/assets/user/Image (3).png'
    }
  ]

  return (
    <div className="feed-page">
      <Header />
      
      <div className="feed">
        {feedData.map((item, index) => (
          <FeedCard
            key={index}
            type={item.type}
            title={item.title}
            buttonText={item.buttonText}
            profileImage={item.profileImage}
          />
        ))}
      </div>

      <BottomNavigation />
    </div>
  )
}

export default FeedPage 