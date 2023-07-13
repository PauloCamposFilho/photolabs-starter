import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import { useState } from 'react';

import '../styles/HomeRoute.scss';

export const HomeRoute = (props) => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);
  return (
    <div className='home-route'>
      <TopNavigationBar
        topics={props.topics}
        favorites={favoritePhotos}
      />
      <PhotoList
        photos={props.photos}
        setFavoritePhotos={setFavoritePhotos}
      />
    </div>
  );
};

export default HomeRoute;