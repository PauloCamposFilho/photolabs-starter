import { useState } from 'react';

const useApplicationData = () => {
  const [modalInformation, setModalInformation] = useState({});
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const updateFavoritePhotos = (photo) => {
    setFavoritePhotos((prevFavPhotos) => {
      const isFavorite = prevFavPhotos?.filter((favPhoto) => favPhoto.id === photo.id).length > 0;
      // If it isn't a favorite, make it a favorite.
      if (!isFavorite) {
        return [...prevFavPhotos, photo];
      }
      // Otherwise, remove it from favorites.
      return prevFavPhotos.filter((_photo) => _photo.id !== photo.id);
    });
  };

  const updateModalInformation = (photo) => {
    if (photo?.id) {
      setModalInformation(photo);
    } else {
      setModalInformation({});
    }
  };

  const state = {
    modalInformation,
    favoritePhotos
  };

  const actions = {
    updateFavoritePhotos,
    updateModalInformation
  }

  return { state, ...actions };

};

export default useApplicationData;