import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

export const FavBadge = (props) => {
  const clickHandler = () => {
    if (!props.isFavPhotoExist) {
      console.log("No favorite photo. Do nothing!");
      return;
    }
    const _mappedFavorites = props.favorites.map((favorite) => favorite.photo); // extract just the photo objects.
    props.onClick(_mappedFavorites);
  }
  return (
    <div onClick={ clickHandler } className='fav-badge'>
      <FavIcon width={20} height={17} fill="#C80000" displayAlert={props.isFavPhotoExist}/>
    </div>
  )
};

export default FavBadge;