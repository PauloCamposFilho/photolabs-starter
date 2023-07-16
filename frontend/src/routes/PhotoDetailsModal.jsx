import React, { useContext } from 'react';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotographerDetails from '../components/PhotographerDetails';
import ApplicationContext from '../contexts/ApplicationContext';
import '../styles/PhotoDetailsModal.scss'

export const PhotoDetailsModal = () => {
  const { state, updateModalInformation } = useContext(ApplicationContext);
  const _isFavorite = state.favoritePhotos?.filter((favorite) => { return favorite.id === state.modalInformation.id }).length > 0;

  const clickHandler = () => {
    updateModalInformation();
  };

  return (
  <div className='photo-details-modal'>
      <button onClick={ clickHandler } className='photo-details-modal__close-button'>
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
          photo={{...state.modalInformation, isFavorite: _isFavorite}}
        />
        <img className='photo-details-modal__image' src={state.modalInformation.urls.full} />
        <div className='photo-details-modal__photographer-details'>
          <PhotographerDetails
            photographer={state.modalInformation.user}
            location={state.modalInformation.location}
          />
        </div>
        <div className='photo-details-modal__header'>
          <span>Similar photos</span>
        </div>
      </div>
      <div className=''>
        <PhotoList
          photos={state.modalInformation.similar_photos}
          canAffectModal={false}
        />
      </div>
    {/* </div> */}
  </div>
  );
}
export default PhotoDetailsModal;