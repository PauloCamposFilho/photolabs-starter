import React, { useEffect } from 'react';
import ApplicationContext from './contexts/ApplicationContext';
import useApplicationData from './hooks/useApplicationData';
import API_ENDPOINTS from './constants/API_ENDPOINTS';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';

const App = () => {
  const { state, ...actions } = useApplicationData();
  const { modalInformation } = state;

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