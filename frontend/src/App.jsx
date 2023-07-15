import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [modalInformation, setModalInformation] = useState({});
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const updateFavoritePhotos = (photo) => {
    setFavoritePhotos((prevFavPhotos) => {
      const isFavorite = prevFavPhotos?.filter((favPhoto) => favPhoto.id === photo.id).length > 0;
      // if it isnt favorite, make it a favorite.
      if (!isFavorite) {
        return [...prevFavPhotos, photo];
      }
      // otherwise get rid of it.
      return prevFavPhotos.filter((_photo) => _photo.id !== photo.id);
    })
  };
  const updateModalInformation = (photo) => {
    if (photo?.id) {
      return setModalInformation(photo);
    }
    return setModalInformation({});
  };
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