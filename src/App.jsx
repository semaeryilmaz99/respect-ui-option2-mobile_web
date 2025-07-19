import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TabNavigation from './components/TabNavigation'
import FeedCard from './components/FeedCard'

function App() {
  const [activeTab, setActiveTab] = useState('topluluk')

  // Mock data for demonstration
  const topluklukFeed = [
    {
      id: 1,
      type: 'respect-activity',
      title: 'Henry the Lee – Onda Bir Şey Var received 100 respect',
      buttonText: 'Respect Gönder',
      profileImage: '/src/assets/Image.png'
    },
    {
      id: 2,
      type: 'chat-reply',
      title: 'Ozan replied to your message: \'This song really speaks to me.\'',
      buttonText: 'View Reply',
      profileImage: '/src/assets/Image (1).png'
    },
    {
      id: 3,
      type: 'new-release',
      title: 'X group just released a new song: \'Hayalet Kadar Sessiz\'',
      buttonText: 'Play Song ▷',
      profileImage: '/src/assets/Image (2).png'
    },
    {
      id: 4,
      type: 'respect-activity',
      title: 'Henry the Lee – Onda Bir Şey Var received 100 respect',
      buttonText: 'Respect Gönder',
      profileImage: '/src/assets/Image (3).png'
    },
    {
      id: 5,
      type: 'chat-reply',
      title: 'Ozan replied to your message: \'This song really speaks to me.\'',
      buttonText: 'View Reply',
      profileImage: '/src/assets/Image (4).png'
    },
    {
      id: 6,
      type: 'new-release',
      title: 'X group just released a new song: \'Hayalet Kadar Sessiz\'',
      buttonText: 'Play Song ▷',
      profileImage: '/src/assets/Image (5).png'
    }
  ]

  const sanaOzelFeed = [
    {
      id: 7,
      type: 'followed-respect',
      title: 'Takip ettiğin sanatçı Ayşe\'nin \'Rüzgar\' şarkısına 50 respect gönderildi',
      buttonText: 'Respect Gönder',
      profileImage: '/src/assets/Image (1).png'
    },
    {
      id: 8,
      type: 'followed-new-song',
      title: 'Takip ettiğin sanatçı Mehmet yeni şarkı yayınladı: \'Sessizlik\'',
      buttonText: 'Dinle ▶',
      profileImage: '/src/assets/Image (3).png'
    },
    {
      id: 9,
      type: 'followed-chat',
      title: 'Takip ettiğin sanatçı Zeynep mesajını yanıtladı: \'Teşekkürler!\'',
      buttonText: 'Görüntüle',
      profileImage: '/src/assets/Image (5).png'
    }
  ]

  const currentFeed = activeTab === 'topluluk' ? topluklukFeed : sanaOzelFeed

  return (
    <div className="app">
      <Header />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="feed">
        {currentFeed.map(item => (
          <FeedCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default App
