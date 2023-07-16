import React from 'react';
import TopicListItem from './TopicListItem';
import FavBadge from './FavBadge';

import '../styles/TopicList.scss';

const TopicList = (props) => {
  const topicListArray = props.topics.map((topic) => {
    return (
      <TopicListItem
        onClick={props.updateStatePhotosByTopicID}
        id={topic.id}
        key={topic.id}
        slug={topic.slug}
        label={topic.title}
       />
    );
  });
  // Always create an "all" category so user can see ALL photos once more.
  topicListArray.unshift(
    <TopicListItem
        onClick={props.updateStatePhotosByTopicID}
        key={'no-topic'}
        id={''}
        label={'All'}
    />
  );

  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}
      {topicListArray}
      <div className='topic-list__item'>
        <FavBadge
          isFavPhotoExist={props.favorites.length > 0}
          favorites={props.favorites}
          onClick={props.updateStatePhotos}
        />
      </div>
    </div>
  );
}

export default TopicList