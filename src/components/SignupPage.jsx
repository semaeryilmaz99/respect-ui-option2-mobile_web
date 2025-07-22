import React, { useState } from 'react'

const SignupPage = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignup = (e) => {
    e.preventDefault()
    // Signup logic will be implemented later
    if (password !== confirmPassword) {
      alert('Şifreler eşleşmiyor')
      return
    }
    console.log('Signup attempt:', { firstName, lastName, email, password })
  }

  const handleSpotifySignup = () => {
    // Spotify OAuth logic will be implemented later
    console.log('Spotify signup clicked')
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1 className="login-title">Respect Müzik</h1>
          <p className="login-subtitle">
            Sanatçılarını destekle, müziğe respect gönder
          </p>
        </div>

        <button onClick={handleSpotifySignup} className="spotify-login-button">
          <img src="/src/assets/spotify.jpg" alt="Spotify" className="spotify-icon" />
          Spotify ile Kayıt Ol
        </button>

        <div className="divider">
          <span className="divider-text">veya</span>
        </div>

        <form className="login-form" onSubmit={handleSignup}>
          <div className="input-group">
            <label htmlFor="firstName" className="input-label">Ad</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Adınız"
              className="login-input"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="lastName" className="input-label">Soyad</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Soyadınız"
              className="login-input"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email" className="input-label">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="login-input"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password" className="input-label">Şifre</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Şifrenizi girin"
              className="login-input"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword" className="input-label">Şifre Tekrar</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Şifrenizi tekrar girin"
              className="login-input"
              required
            />
          </div>

          <button type="submit" className="login-button">
            Kayıt Ol
          </button>
        </form>

        <div className="login-footer">
          <p className="signup-text">
            Zaten hesabınız var mı? 
            <a href="#login" className="signup-link"> Giriş Yap</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignupPage 