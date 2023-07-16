import React, { useContext } from 'react';
import ApplicationContext from '../contexts/ApplicationContext';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { updateFavoritePhotos } = useContext(ApplicationContext);

  const clickHandler = () => {
    updateFavoritePhotos(props.photo);
  };

  return (
    <div onClick={ clickHandler } className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={ props.photo.isFavorite && "#C80000" || null}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;