import React from 'react'
import Header from './Header'
import ArtistProfile from './ArtistProfile'
import TopSupporters from './TopSupporters'
import RecentSupporters from './RecentSupporters'
import RealTimeChat from './RealTimeChat'
import SongsList from './SongsList'

const ArtistPage = () => {
  return (
    <div className="artist-page">
      <Header />
      <div className="artist-content">
        <ArtistProfile />
        <TopSupporters />
        <RecentSupporters />
        <RealTimeChat />
        <SongsList />
      </div>
    </div>
  )
}

export default ArtistPage 