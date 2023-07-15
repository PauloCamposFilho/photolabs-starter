import React from 'react';
import PhotoFavButton from './PhotoFavButton';

import '../styles/PhotoListItem.scss';
import PhotographerDetails from './PhotographerDetails';

const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div className='photo-list__item'>
      <PhotoFavButton
        updateFavoritePhotos={props.updateFavoritePhotos}
        photo={props}
      />
      <img onClick={() => {
          if (props.canAffectModal) {
            props.updateModalInformation(props.photo);
          }
        }} className='photo-list__image' src={ props.imageSource.regular } />
    </div>
  );
}

export default PhotoListItem