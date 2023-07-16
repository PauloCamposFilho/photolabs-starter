import React, { useContext } from 'react';
import ApplicationContext from '../contexts/ApplicationContext';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  const { updateStatePhotosByTopicID } = useContext(ApplicationContext);
  const clickHandler = () => {
    updateStatePhotosByTopicID(props.id);
  }
  return (
  <div className="topic-list__item">
    <span onClick={ clickHandler } key={props.id}>{props.label}</span>
  </div>
  );
}
export default TopicListItem;