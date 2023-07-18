import React, { useContext } from 'react';
import ApplicationContext from '../contexts/ApplicationContext';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

export const FavBadge = () => {
  const { state, updateStatePhotos } = useContext(ApplicationContext);
  const { favoritePhotos } = state;
  const clickHandler = () => {
    // no favorite photos? do nothing.
    if (favoritePhotos.length === 0) {
      return;
    }
    // otherwise, lets update photo state with favorited photos.
    const _mappedFavorites = favoritePhotos.map((favorite) => favorite.photo); // extract just the photo objects.
    updateStatePhotos(_mappedFavorites);
  }
  return (
    <div onClick={ clickHandler } className='fav-badge'>
      <FavIcon width={20} height={17} fill="#C80000" displayAlert={favoritePhotos.length > 0}/>
    </div>
  )
};

export default FavBadge;