import { useState, useReducer } from 'react';
// import photos from '../mocks/photos';
// import topics from '../mocks/topics';

// initial state for photos and topics are now both empty arrays. no more mock data.
// states are filled in with API data on the first render of the App component through
// the useEffect hook.
const initialState = {
  photos: [],
  topics: [],
  favoritePhotos: [],   // empty to start, becomes array with N photo objects.
  modalInformation: {}  // empty to start, expects one photo object.
}

export const ACTIONS = {
  UPDATE_FAVORITE_PHOTOS: 'UPDATE_FAVORITE_PHOTOS',
  UPDATE_MODAL_INFORMATION: 'UPDATE_MODAL_INFORMATION',
  UPDATE_STATE_PHOTOS: 'UPDATE_STATE_PHOTOS',
  UPDATE_STATE_TOPICS: 'UPDATE_STATE_TOPICS'
}

export const API_ENDPOINTS = {
  GET_PHOTOS: '/api/photos',
  GET_TOPICS: '/api/topics'
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
      case ACTIONS.UPDATE_STATE_PHOTOS:
        return {
          ...state,
          photos: action.payload
        };
      case ACTIONS.UPDATE_STATE_TOPICS:
        return {
          ...state,
          topics: action.payload
        }
      default:
        return state;
  }
};

// helper function to fetch API data.

const fetchData = async (url, isJSONResponse = true) => {
  const requestResponse = await fetch(url);
  if (isJSONResponse) {
    const jsonParsed = await requestResponse.json();
    console.log(jsonParsed);
    return jsonParsed;
  }
  return requestResponse;
}

// custom hook to condense application state handling.
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

  const updateStatePhotos = (photos) => {
    dispatch({ type: ACTIONS.UPDATE_STATE_PHOTOS, payload: photos });
  };

  const updateStateTopics = (topics) => {
    dispatch({ type: ACTIONS.UPDATE_STATE_TOPICS, payload: topics });
  };

  return {
    state,
    updateFavoritePhotos,
    updateModalInformation,
    updateStatePhotos,
    updateStateTopics,
    fetchData
   };

};

export default useApplicationData;