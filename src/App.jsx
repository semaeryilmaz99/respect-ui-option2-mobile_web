import React from 'react'
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

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public routes */}
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* Main app routes */}
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/search" element={<FeedPage />} /> {/* Temporarily using FeedPage for search */}
          <Route path="/artist/:id" element={<ArtistPage />} />
          <Route path="/song/:id" element={<SongPage />} />
          <Route path="/send-respect" element={<SendRespectPage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/profile" element={<UserPage />} />
          <Route path="/forgot-password" element={<LoginPage />} /> {/* Placeholder for forgot password */}
          
          {/* Default redirects */}
          <Route path="/" element={<Navigate to="/onboarding" replace />} />
          <Route path="*" element={<Navigate to="/onboarding" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
