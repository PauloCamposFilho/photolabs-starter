import React, { useContext } from 'react';
import PhotoListItem from './PhotoListItem';
import ApplicationContext from '../contexts/ApplicationContext';
import '../styles/PhotoList.scss';


const PhotoList = (props) => {
  const { state } = useContext(ApplicationContext);
  // if props.photos exists, then it's within a modal that passed similar photos into it.
  // if it doesnt, then it's HomeRoute component and state has the photos (filtered or not) to show.
  const photos = props.photos || state.photos;

  const photoList = photos.map((photo) => {
    return (
      <PhotoListItem
        isFavorite={state.favoritePhotos?.filter((favorite) => { return favorite.id === photo.id }).length > 0}
        photo={photo}
        id={photo.id}
        key={photo.id}
        imageSource={photo.urls}
        location={photo.location}
        photographer={photo.user}
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

export default PhotoList;