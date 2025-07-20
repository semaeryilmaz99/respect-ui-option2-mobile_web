import React, { useState } from 'react'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // Login logic will be implemented later
    console.log('Login attempt:', { email, password })
  }

  const handleSpotifyLogin = () => {
    // Spotify OAuth logic will be implemented later
    console.log('Spotify login clicked')
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

        <button onClick={handleSpotifyLogin} className="spotify-login-button">
          <img src="/src/assets/spotify.jpg" alt="Spotify" className="spotify-icon" />
          Spotify ile Giriş Yap
        </button>

        <div className="divider">
          <span className="divider-text">veya</span>
        </div>

        <form className="login-form" onSubmit={handleLogin}>
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

          <button type="submit" className="login-button">
            Giriş Yap
          </button>
        </form>

        <div className="login-footer">
          <a href="#forgot" className="forgot-link">
            Şifremi Unuttum
          </a>
          
          <p className="signup-text">
            Hesabınız yok mu? 
            <a href="#signup" className="signup-link"> Kayıt Ol</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage 