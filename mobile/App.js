import React from 'react';
import Routes from './src/routes';
import { StatusBar } from 'react-native';

const App = () =>{
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Routes />
    </>
  );
}

export default App;
