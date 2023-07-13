import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  return (
  <div className="topic-list__item">
    {/* Insert React */}
    <span key={props.id}>{props.label}</span>
  </div>
  );
}
export default TopicListItem