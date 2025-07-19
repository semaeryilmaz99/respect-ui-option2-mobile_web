import React from 'react'
import ArtistHeader from './ArtistHeader'
import ArtistProfile from './ArtistProfile'
import TopSupporters from './TopSupporters'
import RecentSupporters from './RecentSupporters'
import RealTimeChat from './RealTimeChat'
import SongsList from './SongsList'

const ArtistPage = () => {
  return (
    <div className="artist-page">
      <ArtistHeader />
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