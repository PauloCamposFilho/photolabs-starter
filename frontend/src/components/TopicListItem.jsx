import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  const clickHandler = () => {
    props.onClick(props.id);
  }
  return (
  <div className="topic-list__item">
    {/* Insert React */}
    <span onClick={ clickHandler } key={props.id}>{props.label}</span>
  </div>
  );
}
export default TopicListItem