import React, { useContext } from 'react';
import ApplicationContext from '../contexts/ApplicationContext';
import PhotoFavButton from './PhotoFavButton';

import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { updateModalInformation } = useContext(ApplicationContext);
  const clickHandler = () => {
    if (props.canAffectModal) {
      updateModalInformation(props.photo);
    }
  };
  /* Insert React */
  return (
    <div className='photo-list__item'>
      <PhotoFavButton photo={props}/>
      <img onClick={ clickHandler } className='photo-list__image' src={ props.photo.urls.regular } />
    </div>
  );
}

export default PhotoListItem;