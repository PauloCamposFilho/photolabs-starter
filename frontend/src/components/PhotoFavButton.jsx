import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isFav, setFav] = useState(false);
  
  return (
    <div onClick={() => { setFav(!isFav) }} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon fill={ isFav && "#C80000" || null}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;