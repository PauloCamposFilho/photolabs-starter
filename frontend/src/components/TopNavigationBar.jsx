import React from 'react';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'

const TopNavigationBar = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList/>
    </div>
  )
}

export default TopNavigationBar;