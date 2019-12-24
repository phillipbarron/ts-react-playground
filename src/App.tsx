import React from 'react';
import grover from './grover.webp'
import AlertButton from './AlertButton';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={grover} alt="logo" />
        <AlertButton />
      </header>
    </div>
  );
}

export default App;
