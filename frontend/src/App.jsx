import React, { useState, useEffect } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import { API_ENDPOINTS } from './hooks/useApplicationData';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    updateFavoritePhotos,
    updateModalInformation,
    updateStatePhotos,
    updateStatePhotosByTopicID,
    updateStateTopics,
    fetchData
  } = useApplicationData();

  const { modalInformation, favoritePhotos, photos, topics } = state;

  useEffect(() => {
    const _updatePhotoTopicStates = async () => {
      updateStatePhotos(await fetchData(API_ENDPOINTS.GET_PHOTOS));
      updateStateTopics(await fetchData(API_ENDPOINTS.GET_TOPICS));
    };
    try {
      _updatePhotoTopicStates();
    } catch(error) {
      console.log(error);
    }
  }, []);

  return (
  <div className="App">
    <HomeRoute
      photos={photos}
      updateModalInformation={updateModalInformation}
      updateFavoritePhotos={updateFavoritePhotos}
      updateStatePhotosByTopicID={updateStatePhotosByTopicID}
      favorites={favoritePhotos}
      topics={topics}
    />
    { modalInformation?.id &&
      <PhotoDetailsModal
        updateModalInformation={updateModalInformation}
        updateFavoritePhotos={updateFavoritePhotos}
        favorites={favoritePhotos}
        photoInformation={modalInformation}
      /> }
  </div>
  );
}


export default App