import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Icon } from './components/Icon';

function App() {
  return (
    <div className="App">
      <Icon iconType="bishop-black" />
      <Icon iconType="bishop-white" />
      <Icon iconType="knight-black" />
    </div>
  );
}

export default App;
