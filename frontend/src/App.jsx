import React from 'react';
import PhotoList from './components/PhotoList';
import TopicListItem from './components/TopicListItem';
import './App.scss';
import TopicList from './components/TopicList';
import TopNavigationBar from './components/TopNavigationBar';

// Note: Rendering a single component to build components in isolation
const App = () => (
  <div className="App">
    {/* <PhotoListItem/> */}
    {/* <TopicListItem /> */}
    {/* <TopicList />
    <PhotoList /> */}
    <TopNavigationBar/>
  </div>
)

export default App