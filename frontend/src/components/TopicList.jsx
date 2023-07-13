import React from 'react';
import TopicListItem from './TopicListItem';

import '../styles/TopicList.scss';

const TopicList = (props) => {
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
    </div>
  );
}

TopicList.defaultProps = {
  topics: [
    {
      "id": "1",
      "slug": "topic-1",
      "title": "Nature"
    },
    {
      "id": "2",
      "slug": "topic-2",
      "title": "Travel"
    },
    {
      "id": "3",
      "slug": "topic-3",
      "title": "People"
    },
  ]
}
export default TopicList