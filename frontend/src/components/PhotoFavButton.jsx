import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const toggleFavorite = () => {
    props.updateFavoritePhotos(props.photo);
  };

  return (
    <div onClick={toggleFavorite} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon fill={ props.photo.isFavorite && "#C80000" || null}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;