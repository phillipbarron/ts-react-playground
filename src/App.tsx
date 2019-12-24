import React from 'react';
import logo from './logo.svg';
import AlertButton from './AlertButton';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AlertButton />
      </header>
    </div>
  );
}

export default App;
