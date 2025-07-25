import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
    onClose() // Sidebar'ı kapat
  }

  const handleLogout = () => {
    // Çıkış işlemi - şimdilik console.log, ileride auth service eklenebilir
    console.log('Çıkış yapılıyor...')
    navigate('/login')
    onClose()
  }

  const menuItems = [
    {
      label: 'Ana Sayfa',
      path: '/feed',
      action: () => handleNavigation('/feed')
    },
    {
      label: 'Sanatçılar',
      path: '/artist/1',
      action: () => handleNavigation('/artist/1')
    },
    {
      label: 'Şarkılar',
      path: '/song/1',
      action: () => handleNavigation('/song/1')
    },
    {
      label: 'Respect Gönder',
      path: '/send-respect',
      action: () => handleNavigation('/send-respect')
    },
    {
      label: 'Profil Ayarları',
      path: '/profile',
      action: () => handleNavigation('/profile')
    },
    {
      label: 'Çıkış',
      action: handleLogout
    }
  ]

  return (
    <>
      {/* Overlay */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button className="sidebar-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="sidebar-content">
          <nav className="sidebar-nav">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="sidebar-nav-item"
                onClick={item.action}
              >
                <span className="nav-item-label">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="User" />
            </div>
            <div className="user-details">
              <p className="user-name">Kullanıcı Adı</p>
              <p className="user-respect">1,247 Respect</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar 