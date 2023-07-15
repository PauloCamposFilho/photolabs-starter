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

  console.log("photos", photos);

  const updateFavoritePhotos = (isFavorite, photo) => {
    setFavoritePhotos((prevFavPhotos) => {
      if (isFavorite) {
        return [...prevFavPhotos, photo];
      }
      return prevFavPhotos.filter((_photo) => _photo.id !== photo.id);
    })
  };
  const updateModalInformation = (photo) => {
    if (photo?.id) {
      console.log("the info:", photo);
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