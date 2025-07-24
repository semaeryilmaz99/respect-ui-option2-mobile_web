import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
// import { authService } from '../api' // Commented out for demo mode

const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    
    if (!email || !password) {
      setError('Email ve şifre gereklidir')
      return
    }

    // Demo mode - directly navigate to feed
    setLoading(true)
    setError('')
    
    // Simulate loading for better UX
    setTimeout(() => {
      setLoading(false)
      navigate('/feed')
    }, 500)

    /* API version - uncomment when backend is ready
    try {
      setLoading(true)
      setError('')
      
      await authService.login({ email, password })
      
      // Navigate to feed page after successful login
      navigate('/feed')
    } catch (err) {
      setError(err.message || 'Giriş yapılırken bir hata oluştu')
    } finally {
      setLoading(false)
    }
    */
  }

  const handleSpotifyLogin = () => {
    // Demo mode - directly navigate to feed
    setLoading(true)
    setError('')
    
    // Simulate loading for better UX
    setTimeout(() => {
      setLoading(false)
      navigate('/feed')
    }, 800)
    
    /* Spotify OAuth version - uncomment when backend is ready
    // Spotify OAuth logic will be implemented later
    console.log('Spotify login clicked')
    */
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

        <button onClick={handleSpotifyLogin} className="spotify-login-button" disabled={loading}>
          <img src="/src/assets/spotify.jpg" alt="Spotify" className="spotify-icon" />
          {loading ? 'Giriş yapılıyor...' : 'Spotify ile Giriş Yap'}
        </button>

        <div className="divider">
          <span className="divider-text">veya</span>
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          {error && (
            <div className="error-message" style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>
              {error}
            </div>
          )}
          
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
              disabled={loading}
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
              disabled={loading}
            />
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
          </button>
        </form>

        <div className="login-footer">
          <Link to="/forgot-password" className="forgot-link">
            Şifremi Unuttum
          </Link>
          
          <p className="signup-text">
            Hesabınız yok mu? 
            <Link to="/signup" className="signup-link"> Kayıt Ol</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage 