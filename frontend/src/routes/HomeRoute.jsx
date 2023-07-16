import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList'

import '../styles/HomeRoute.scss';

export const HomeRoute = (props) => {
  return (
    <div className='home-route'>
      <TopNavigationBar
        topics={props.topics}
        favorites={props.favorites}
        updateStatePhotosByTopicID={props.updateStatePhotosByTopicID}
      />
      <PhotoList
        photos={props.photos}
        favorites={props.favorites}
        updateFavoritePhotos={props.updateFavoritePhotos}
        updateModalInformation={props.updateModalInformation}
        canAffectModal={true}
      />
    </div>
  );
};

export default HomeRoute;