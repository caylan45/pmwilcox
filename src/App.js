import React from 'react';
import NavigationBar from './NavigationBar';
import FullScreenImage from './FullScreenImage';
import image from './Images/IMG_0475.jpg';
import MainContent from './MainContent';
import './App.css'
const App = () => {
  return (
    <div className='bg'>
      <NavigationBar />
      <FullScreenImage src={image} />
      <MainContent />

      {/* Other components */}
    </div>
  );
};

export default App;
