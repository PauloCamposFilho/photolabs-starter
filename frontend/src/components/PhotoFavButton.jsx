import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [isFav, setFav] = useState(false);

  const updateFavoritePhotos = (isFavorite) => {
    props.setFavoritePhotos((prevFavPhotos) => {
      let newFavPhotos = [...prevFavPhotos];
      if (isFavorite) {
        newFavPhotos.push(props.photo);
      } else {
        newFavPhotos = newFavPhotos.filter((photo) => {
          return photo.id !== props.photo.id;
        });
      }
      return newFavPhotos;
    })
  };

  const toggleFavorite = () => {
    let _isFav;
    setFav((prev) => {
      _isFav = prev;
      return !prev;
    });
    updateFavoritePhotos(!isFav);
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