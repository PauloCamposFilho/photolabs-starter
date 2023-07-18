import React from 'react';
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