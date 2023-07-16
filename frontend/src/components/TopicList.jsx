import React, { useContext } from 'react';
import ApplicationContext from '../contexts/ApplicationContext';
import TopicListItem from './TopicListItem';
import FavBadge from './FavBadge';

import '../styles/TopicList.scss';

const TopicList = () => {
  const { state } = useContext(ApplicationContext);
  const { topics } = state;
  const topicListArray = topics.map((topic) => {
    return (
      <TopicListItem
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
        key={'no-topic'}
        id={''}
        label={'All'}
    />
  );

  return (
    <div className="top-nav-bar__topic-list">
      {topicListArray}
      <div className='topic-list__item'>
        <FavBadge/>
      </div>
    </div>
  );
}

export default TopicList;