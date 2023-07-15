import { useState, useReducer } from 'react';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

const initialState = {
  photos,
  topics,
  favoritePhotos: [],   // empty to start, becomes array with N photo objects.
  modalInformation: {}  // empty to start, expects one photo object.
}

export const ACTIONS = {
  UPDATE_FAVORITE_PHOTOS: 'UPDATE_FAVORITE_PHOTOS',
  UPDATE_MODAL_INFORMATION: 'UPDATE_MODAL_INFORMATION'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_FAVORITE_PHOTOS:
      // is the photo already favorited?
      const isFavorite = state.favoritePhotos.some((favPhoto) => favPhoto.id === action.payload.id);
      // if so, remove it.
      if (isFavorite) {
        return {
          ...state,
          favoritePhotos: state.favoritePhotos.filter((favPhoto) => favPhoto.id !== action.payload.id)
        }
      }
      // otherwise, add it.
      return {
        ...state,
        favoritePhotos: [...state.favoritePhotos, action.payload]
      };
      case ACTIONS.UPDATE_MODAL_INFORMATION:
        // simply return the payload into modal information
        // either you clicked a photo, and the own photo is coming through as the payload
        // or the close button on the modal was clicked, in which case payload will be empty and re-render will hide modal.
        return {
          ...state,
          modalInformation: action.payload
      };
      default:
        return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateFavoritePhotos = (photo) => {
    dispatch({ type: ACTIONS.UPDATE_FAVORITE_PHOTOS, payload: photo });
  };

  const updateModalInformation = (photo) => {
    if (photo?.id) {
      dispatch({ type: ACTIONS.UPDATE_MODAL_INFORMATION, payload: photo });
    } else {
      dispatch({ type: ACTIONS.UPDATE_MODAL_INFORMATION, payload: {} });
    }
  };

  return {
    state,
    updateFavoritePhotos,
    updateModalInformation
   };

};

export default useApplicationData;