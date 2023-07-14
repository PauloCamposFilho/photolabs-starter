import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [isFav, setFav] = useState(false);

  const toggleFavorite = () => {
    props.updateFavoritePhotos(!isFav, props.photo);
    setFav(!isFav);
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