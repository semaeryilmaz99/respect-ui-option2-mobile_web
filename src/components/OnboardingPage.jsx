import React, { useState } from 'react'

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      id: 0,
      title: "Sevdiğiniz Sanatçıları Destekleyin",
      subtitle: "Onların koruyucu melekleri olun.",
      icon: "💛",
      buttonText: "Next"
    },
    {
      id: 1,
      title: "Etkinizi Görün",
      subtitle: "Hayatınıza dokunan sanatçıların müziğine ne kadar dokunduğunuzu görün.",
      showArtistList: true,
      buttonText: "Next"
    },
    {
      id: 2,
      title: "Topluluğun Bir Parçası Olun",
      subtitle: "Aynı müziği dinlediğiniz, aynı duyguları paylaştığınız insanlarla ve sanatçılarla iletişim kurun, keşfedin, güçlerinizi birleştirin ve müziğin değerini koruyan kahramanlar olun.",
      showCommunityImage: true,
      buttonText: "Get Started"
    }
  ]

  const artists = [
    { id: 1, name: "Liam Carter", respect: "120 Respect", avatar: "👨‍🎤" },
    { id: 2, name: "Olivia Bennett", respect: "110 Respect", avatar: "👩‍🎤" },
    { id: 3, name: "Noah Thompson", respect: "100 Respect", avatar: "👨‍🎤" },
    { id: 4, name: "Ava Harper", respect: "90 Respect", avatar: "👩‍🎤" },
    { id: 5, name: "Ethan Parker", respect: "80 Respect", avatar: "👨‍🎤" }
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Navigate to main app
      console.log('Onboarding completed!')
    }
  }

  const currentStepData = steps[currentStep]

  return (
    <div className="onboarding-page">
      {/* Progress Indicators */}
      <div className="progress-indicators">
        {steps.map((_, index) => (
          <div 
            key={index}
            className={`progress-dot ${index === currentStep ? 'active' : ''}`}
          />
        ))}
      </div>

      {/* Help Button (only on step 3) */}
      {currentStep === 2 && (
        <button className="help-button">?</button>
      )}

      <div className="onboarding-content">
        {/* Step 1: Heart Icon */}
        {currentStep === 0 && (
          <div className="step-icon">
            <div className="onb-hero-image">
              <img src="/src/assets/onb-1.png" alt="Heart with Wings" />
            </div>
          </div>
        )}

        {/* Step 2: Artist List */}
        {currentStep === 1 && (
          <div className="artist-list-container">
            <div className="artist-list-card">
              {artists.map((artist, index) => (
                <div key={artist.id} className="artist-item">
                  <span className="artist-number">{index + 1}</span>
                  <div className="artist-info">
                    <h4 className="artist-name">{artist.name}</h4>
                    <p className="artist-respect">{artist.respect}</p>
                  </div>
                  <div className="artist-avatar">{artist.avatar}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Community Illustration */}
        {currentStep === 2 && (
          <div className="community-illustration">
            <div className="community-image">
              <div className="music-community">
                <div className="musician guitarist">🎸</div>
                <div className="musician singer">🎤</div>
                <div className="music-note">🎵</div>
                <div className="music-note">🎶</div>
                <div className="fan">👨‍💻</div>
                <div className="fan">👩‍💻</div>
                <div className="heart-icon">❤️</div>
              </div>
            </div>
          </div>
        )}

        {/* Text Content */}
        <div className="text-content">
          <h1 className="step-title">{currentStepData.title}</h1>
          <p className="step-subtitle">{currentStepData.subtitle}</p>
        </div>

        {/* Next Button */}
        <button className="next-button" onClick={handleNext}>
          {currentStepData.buttonText}
        </button>
      </div>
    </div>
  )
}

export default OnboardingPage 