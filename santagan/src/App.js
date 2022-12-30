import React from 'react';
import BeginerContainer from './containers/Beginner/BeginerContainer';
import HeightContainer from './containers/Height/HeightContainer';
import LocalContainer from './containers/Local/LocalContainer';
import NationalContainer from './containers/National/NationalContainer';

const App = () => {
  return (
    <div>
      <BeginerContainer/>
      <HeightContainer/>
      <LocalContainer/>
      <NationalContainer/>
    </div>
  );
};

export default App;