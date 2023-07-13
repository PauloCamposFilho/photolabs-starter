import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';

import '../styles/HomeRoute.scss';

export const HomeRoute = (props) => {
  return (
    <div className='home-route'>
      <TopNavigationBar
        topics={props.topics}
      />
      <PhotoList
        photos={props.photos}
      />
    </div>
  );
};

export default HomeRoute;