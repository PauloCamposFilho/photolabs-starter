import React, { useContext } from 'react';
import ApplicationContext from '../contexts/ApplicationContext';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList'

import '../styles/HomeRoute.scss';

export const HomeRoute = () => {
  return (
    <div className='home-route'>
      <TopNavigationBar/>
      <PhotoList canAffectModal={true}/>
    </div>
  );
};

export default HomeRoute;