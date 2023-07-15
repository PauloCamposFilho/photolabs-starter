import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotographerDetails from '../components/PhotographerDetails';

export const PhotoDetailsModal = (props) => {
  console.log("the image details", props.photoInformation);
  const _isFavorite = props.favorites?.filter((favorite) => { return favorite.id === props.photoInformation.id }).length > 0;
  return (
  <div className='photo-details-modal'>
    {/* <div className='photo-details-modal__top-bar'> */}
      <button onClick={() => { props.updateModalInformation(); }} className='photo-details-modal__close-button'>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_428_287">
            <rect width="18" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton
          updateFavoritePhotos={props.updateFavoritePhotos}
          photo={{...props.photoInformation, isFavorite: _isFavorite}}
        />
        <img className='photo-details-modal__image' src={props.photoInformation.urls.full} />
        <div className='photo-details-modal__photographer-details'>
          <PhotographerDetails
          photographer={props.photoInformation.user}
          location={props.photoInformation.location}
          />
        </div>
        <div className='photo-details-modal__header'>
          <span>Similar photos</span>
        </div>
      </div>
      <div className=''>
        <PhotoList
          photos={props.photoInformation.similar_photos}
          favorites={props.favorites}
          updateFavoritePhotos={props.updateFavoritePhotos}
          updateModalInformation={props.updateModalInformation}
          canAffectModal={false}
        />
      </div>
    {/* </div> */}
  </div>
  );
}
export default PhotoDetailsModal;