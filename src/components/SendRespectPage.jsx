import React, { useState } from 'react'

const SendRespectPage = () => {
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState('')

  const respectAmounts = [20, 50, 100, 200, 500, 1000]

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value)
    setSelectedAmount(null)
  }

  const handleSendRespect = () => {
    const amount = selectedAmount || parseInt(customAmount)
    if (amount) {
      console.log(`Sending ${amount} respect to Sunset Serenade`)
      // Send respect logic will be implemented later
    }
  }

  return (
    <div className="send-respect-page">
      <div className="respect-header">
        <button className="close-button">✕</button>
        <h1 className="respect-title">Send Respect</h1>
      </div>

      <div className="respect-content">
        <div className="song-info-section">
          <div className="song-cover">
            <img src="/src/assets/respect.png" alt="Sunset Serenade" />
          </div>
          <div className="song-details">
            <h2 className="song-name">Sunset Serenade</h2>
            <p className="artist-name">Song by Alex</p>
          </div>
        </div>

        <div className="amount-selection">
          <h3 className="section-title">Select Amount</h3>
          
          <div className="amount-grid">
            {respectAmounts.map((amount) => (
              <button
                key={amount}
                className={`amount-button ${selectedAmount === amount ? 'selected' : ''}`}
                onClick={() => handleAmountSelect(amount)}
              >
                {amount} Respect
              </button>
            ))}
          </div>

          <input
            type="number"
            placeholder="Enter amount"
            value={customAmount}
            onChange={handleCustomAmountChange}
            className="custom-amount-input"
          />
        </div>

        <button 
          className="send-support-button"
          onClick={handleSendRespect}
          disabled={!selectedAmount && !customAmount}
        >
          Send and Support
        </button>
      </div>
    </div>
  )
}

export default SendRespectPage 