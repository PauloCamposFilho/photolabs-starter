import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const { state, updateFavoritePhotos, updateModalInformation } = useApplicationData();
  const { modalInformation, favoritePhotos } = state;

  return (
  <div className="App">
    <HomeRoute
      photos={photos}
      updateModalInformation={updateModalInformation}
      updateFavoritePhotos={updateFavoritePhotos}
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