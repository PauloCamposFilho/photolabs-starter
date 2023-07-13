import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [isFav, setFav] = useState(false);

  const updateFavoritePhotos = (isFavorite) => {
    props.setFavoritePhotos((prevFavPhotos) => {
      const { id } = props.photo;
      if (isFavorite) {
        return [...prevFavPhotos, props.photo];
      }
      return prevFavPhotos.filter((photo) => photo.id !== id);
    })
  };

  const toggleFavorite = () => {
    setFav((prev) => {
      const isFav = !prev;
      updateFavoritePhotos(isFav);
      return isFav;
    });
  };

  return (
    <div onClick={toggleFavorite} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon fill={ isFav && "#C80000" || null}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;