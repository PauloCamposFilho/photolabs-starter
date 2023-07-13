import React from 'react';
import PhotoFavButton from './PhotoFavButton';

import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div className='photo-list__item'>
      <PhotoFavButton
        setFavoritePhotos={props.setFavoritePhotos}
        photo={props}
      />
      <img className='photo-list__image' src={ props.imageSource.regular } />
      <div className='photo-list__user-details'>
        <img className='photo-list__user-profile' src={ props.photographer.profile } />
        <div className='photo-list__user-info'>
          <span style={{ display: "block" }}>{ props.photographer.name }</span>
          {/* <br /> */}
          <span className='photo-list__user-location'>{ `${props.location.city}, ${props.location.country}` }</span>
        </div>
      </div>
    </div>
  );
}

export default PhotoListItem