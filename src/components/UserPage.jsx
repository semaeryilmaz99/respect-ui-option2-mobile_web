import React from 'react'
import Header from './Header'
import UserProfile from './UserProfile'
import UserStats from './UserStats'
import UserTopArtists from './UserTopArtists'
import UserTopSongs from './UserTopSongs'

const UserPage = () => {
  return (
    <div className="user-page">
      <Header />
      <div className="user-content">
        <UserProfile />
        <UserStats />
        <UserTopArtists />
        <UserTopSongs />
      </div>
    </div>
  )
}

export default UserPage 