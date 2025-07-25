import React, { useState } from 'react'
import Header from './Header'
import FeedCard from './FeedCard'

const FeedPage = ({ onToggleSidebar }) => {
  const [activeTab, setActiveTab] = useState('community')

  // Topluluk sekmesi verileri
  const communityFeedData = [
    {
      type: 'trending-song',
      title: 'Bu hafta en çok respect alan şarkı: Sezen Aksu - Gidiyorum (2,847 respect)',
      buttonText: 'Dinle',
      profileImage: '/src/assets/song/Image.png'
    },
    {
      type: 'new-release',
      title: 'Yeni şarkı yayınlandı: Tarkan - Yeni Aşk',
      buttonText: 'Dinle',
      profileImage: '/src/assets/artist/Image (1).png'
    },
    {
      type: 'chat-reply',
      title: 'Ajda Pekkan - Bambaşka şarkısında hayranlarına cevap verdi',
      buttonText: 'Sohbete Katıl',
      profileImage: '/src/assets/artist/Image (2).png'
    },
    {
      type: 'trending-artist',
      title: 'Bu ayın trending sanatçısı: Barış Manço (15,482 respect)',
      buttonText: 'Profili Gör',
      profileImage: '/src/assets/artist/Image (3).png'
    },
    {
      type: 'respect-notification',
      title: 'Kullanıcı @musiclover23 Ahmet Kaya - İşte Gidiyorum şarkısına 10 respect gönderdi',
      buttonText: 'Profili Gör',
      profileImage: '/src/assets/user/Image.png'
    }
  ]

  // Sana Özel sekmesi verileri
  const personalFeedData = [
    {
      type: 'followed-respect',
      title: 'Takip ettiğin Sezen Aksu - Gidiyorum şarkısına yeni respectler geldi (47 yeni respect)',
      buttonText: 'Dinle',
      profileImage: '/src/assets/artist/Image.png'
    },
    {
      type: 'followed-new-song',
      title: 'Takip ettiğin sanatçı Cem Karaca yeni şarkı yayınladı: "Yeni Türkü"',
      buttonText: 'Dinle',
      profileImage: '/src/assets/artist/Image (4).png'
    },
    {
      type: 'followed-chat',
      title: 'Takip ettiğin Barış Manço - Gülpembe şarkısında yeni sohbet cevabı',
      buttonText: 'Sohbete Katıl',
      profileImage: '/src/assets/artist/Image (5).png'
    },
    {
      type: 'chat-reply',
      title: 'Ahmet Kaya - İşte Gidiyorum şarkısındaki mesajına @fan_ahmet cevap verdi',
      buttonText: 'Sohbete Katıl',
      profileImage: '/src/assets/user/Image (1).png'
    },
    {
      type: 'followed-respect',
      title: 'Takip ettiğin Ajda Pekkan sanatçısına 128 yeni respect gönderildi',
      buttonText: 'Profili Gör',
      profileImage: '/src/assets/artist/Image (6).png'
    }
  ]

  const currentData = activeTab === 'community' ? communityFeedData : personalFeedData

  return (
    <div className="feed-page">
      <Header onToggleSidebar={onToggleSidebar} />
      
      {/* Tab Navigation */}
      <div className="feed-tabs">
        <button 
          className={`tab-button ${activeTab === 'community' ? 'active' : ''}`}
          onClick={() => setActiveTab('community')}
        >
          Topluluk
        </button>
        <button 
          className={`tab-button ${activeTab === 'personal' ? 'active' : ''}`}
          onClick={() => setActiveTab('personal')}
        >
          Sana Özel
        </button>
      </div>
      
      <div className="feed">
        {currentData.map((item, index) => (
          <FeedCard
            key={index}
            type={item.type}
            title={item.title}
            buttonText={item.buttonText}
            profileImage={item.profileImage}
          />
        ))}
      </div>
    </div>
  )
}

export default FeedPage 