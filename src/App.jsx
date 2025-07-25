import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

// Import all page components
import OnboardingPage from './components/OnboardingPage'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import FeedPage from './components/FeedPage'
import ArtistPage from './components/ArtistPage'
import SongPage from './components/SongPage'
import SendRespectPage from './components/SendRespectPage'
import UserPage from './components/UserPage'
import Sidebar from './components/Sidebar'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <Router>
      <div className="App">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
        
        <Routes>
          {/* Public routes */}
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* Main app routes - Header'a toggleSidebar prop'u eklenecek */}
          <Route path="/feed" element={<FeedPage onToggleSidebar={toggleSidebar} />} />
          <Route path="/search" element={<FeedPage onToggleSidebar={toggleSidebar} />} />
          <Route path="/artist/:id" element={<ArtistPage onToggleSidebar={toggleSidebar} />} />
          <Route path="/song/:id" element={<SongPage onToggleSidebar={toggleSidebar} />} />
          <Route path="/send-respect" element={<SendRespectPage onToggleSidebar={toggleSidebar} />} />
          <Route path="/user/:id" element={<UserPage onToggleSidebar={toggleSidebar} />} />
          <Route path="/profile" element={<UserPage onToggleSidebar={toggleSidebar} />} />
          <Route path="/forgot-password" element={<LoginPage />} />
          
          {/* Default redirects */}
          <Route path="/" element={<Navigate to="/onboarding" replace />} />
          <Route path="*" element={<Navigate to="/onboarding" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
