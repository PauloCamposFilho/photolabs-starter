import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList'
import { useState } from 'react';

import '../styles/HomeRoute.scss';

export const HomeRoute = (props) => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const updateFavoritePhotos = (isFavorite, photo) => {
    setFavoritePhotos((prevFavPhotos) => {
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
        updateModalInformation={props.updateModalInformation}
      />
    </div>
  );
};

export default HomeRoute;