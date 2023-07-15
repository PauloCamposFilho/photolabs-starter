import React from 'react';
import PhotoListItem from './PhotoListItem';

import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  console.log("I'm lost.");
  console.log(props);
  const photoList = props.photos.map((photo) => {    
    return (
      <PhotoListItem
        photo={photo}
        id={photo.id}
        key={photo.id}
        imageSource={photo.urls}
        location={photo.location}
        photographer={photo.user}
        updateFavoritePhotos={props.updateFavoritePhotos}
        updateModalInformation={props.updateModalInformation}
        canAffectModal={props.canAffectModal}
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