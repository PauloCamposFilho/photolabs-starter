import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  // const arrayTopics = props.map((link) => {
  //   return <span key={link.id}>{link.label}</span>
  // });
  return (
  <div className="topic-list__item">
    {/* Insert React */}
    <span key={props.id}>{props.label}</span>
  </div>
  );
}

// TopicListItem.defaultProps =   {
//   "id": "1",
//   "slug": "topic-1",
//   "label": "Nature"
// }
export default TopicListItem