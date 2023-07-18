import { useReducer, useEffect } from 'react';
import ACTIONS from '../constants/ACTIONS';             // reducer action.type(s)
import API_ENDPOINTS from '../constants/API_ENDPOINTS'; // API Endpoints for fetching photo/topic data.

// initial state for photos and topics are now both empty arrays. no more mock data.
// states are filled in with API data on the first render of the App component through
// the useEffect hook.
const initialState = {
  photos: [],           // empty to start, receives array with N photo objects on useEffect of first render.
  topics: [],           // empty to start, receives array with N topic objects on useEffect of first render.
  favoritePhotos: [],   // empty to start, becomes array with N photo objects.
  modalInformation: {}  // empty to start, expects one photo object.
}

// reducer function that is used in the useReducer hook (setup done inside useApplicationData custom hook below)
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
        // updates the application state with given photos.
        return {
          ...state,
          photos: action.payload
        };
      case ACTIONS.UPDATE_STATE_TOPICS:
        // updates the application state with given topics.
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
    return jsonParsed;
  }
  return requestResponse;
}

// custom hook to condense application state handling.
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // wrapper to call dispatch for updating favorited photo state.
  const updateFavoritePhotos = (photo) => {
    dispatch({ type: ACTIONS.UPDATE_FAVORITE_PHOTOS, payload: photo });
  };

  // wrapper to call dispatch for updating the modalInformation state.
  const updateModalInformation = (photo) => {
    if (photo?.id) {
      dispatch({ type: ACTIONS.UPDATE_MODAL_INFORMATION, payload: photo });
    } else {
      dispatch({ type: ACTIONS.UPDATE_MODAL_INFORMATION, payload: {} });
    }
  };

  // wrapper to call dispatch for updating the photos state.
  const updateStatePhotos = (photos) => {
    dispatch({ type: ACTIONS.UPDATE_STATE_PHOTOS, payload: photos });
  };

  // "overload" method for updateStatePhotos with topicId, might refactor it into the other function with optional param. separate function for now.
  const updateStatePhotosByTopicID = async (topicId) => {
    try {
      // if no topicId is passed, get all photos instead.
      let _apiURL = topicId ? `${API_ENDPOINTS.GET_PHOTOS_BY_TOPICID}${topicId}` : API_ENDPOINTS.GET_PHOTOS;
      const _photos = await fetchData(_apiURL);
      updateStatePhotos(_photos);
    } catch(err) {
      console.log(err);
    }
  };

  // wrapper to call dispatch for updating the topics state.
  const updateStateTopics = (topics) => {
    dispatch({ type: ACTIONS.UPDATE_STATE_TOPICS, payload: topics });
  };

  useEffect(() => {
    const updatePhotoTopicStates = async () => {
      try {
        updateStatePhotos(await fetchData(API_ENDPOINTS.GET_PHOTOS));
        updateStateTopics(await fetchData(API_ENDPOINTS.GET_TOPICS));
      } catch (error) {
        console.log(error);
      }
    };
    updatePhotoTopicStates();
  }, []);

  // return our state and functions for our app.
  return {
    state,
    updateFavoritePhotos,
    updateModalInformation,
    updateStatePhotos,
    updateStatePhotosByTopicID,
    updateStateTopics,
    fetchData
   };

};

export default useApplicationData;