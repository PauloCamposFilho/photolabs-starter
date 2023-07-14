import React from 'react';
import PhotoListItem from './PhotoListItem';

import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  const photoList = props.photos.map((photo) => {    
    return (
      <PhotoListItem
        id={photo.id}
        key={photo.id}
        imageSource={photo.urls}
        location={photo.location}
        photographer={photo.user}
        updateFavoritePhotos={props.updateFavoritePhotos}
      />
    );
  });
  return (
  <ul className="photo-list">
    {photoList}
  </ul>
  );
}

export default PhotoList