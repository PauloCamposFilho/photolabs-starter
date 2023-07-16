import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';

const TopNavigationBar = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
        topics={props.topics}
        favorites={props.favorites}
        updateStatePhotosByTopicID={props.updateStatePhotosByTopicID}
        updateStatePhotos={props.updateStatePhotos}
      />
    </div>
  )
}

export default TopNavigationBar;