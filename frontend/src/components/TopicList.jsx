import React from 'react';
import TopicListItem from './TopicListItem';
import FavBadge from './FavBadge';

import '../styles/TopicList.scss';

const TopicList = (props) => {
  console.log(props);
  const topicListArray = props.topics.map((topic) => {
    return (
      <TopicListItem
        key={topic.id}
        slug={topic.slug}
        label={topic.title}
       />
    );
  });

  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}
      {topicListArray}
      <div className='topic-list__item'>
        <FavBadge
          isFavPhotoExist={props.favorites.length > 0}
        />
      </div>
    </div>
  );
}

export default TopicList