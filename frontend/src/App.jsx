import React, { useEffect } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData, { API_ENDPOINTS } from './hooks/useApplicationData';
import ApplicationContext from './contexts/ApplicationContext';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, ...actions } = useApplicationData();
  const { modalInformation } = state;

  useEffect(() => {
    const updatePhotoTopicStates = async () => {
      try {
        actions.updateStatePhotos(await actions.fetchData(API_ENDPOINTS.GET_PHOTOS));
        actions.updateStateTopics(await actions.fetchData(API_ENDPOINTS.GET_TOPICS));
      } catch (error) {
        console.log(error);
      }
    };
    updatePhotoTopicStates();
  }, []);

  return (
    <ApplicationContext.Provider value={{ state, ...actions }}>
      <div className="App">
        <HomeRoute/>
        { modalInformation?.id && <PhotoDetailsModal/> }
      </div>
    </ApplicationContext.Provider>
  );
}


export default App;