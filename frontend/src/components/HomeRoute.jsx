import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import { useState } from 'react';

import '../styles/HomeRoute.scss';

export const HomeRoute = (props) => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const updateFavoritePhotos = (isFavorite, photo) => {
    setFavoritePhotos((prevFavPhotos) => {
      console.log("prev", prevFavPhotos);
      if (isFavorite) {
        return [...prevFavPhotos, photo];
      }
      return prevFavPhotos.filter((_photo) => _photo.id !== photo.id);
    })
  };

  return (
    <div className='home-route'>
      <TopNavigationBar
        topics={props.topics}
        favorites={favoritePhotos}
      />
      <PhotoList
        photos={props.photos}
        updateFavoritePhotos={updateFavoritePhotos}
      />
    </div>
  );
};

export default HomeRoute;