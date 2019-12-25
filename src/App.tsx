import React from 'react';
import grover from './grover.webp'
import AlertButton from './AlertButton';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={grover} alt="logo" />
        <div className="alert_button_container">
          <AlertButton />
        </div>
        
      </header>
    </div>
  );
}

export default App;
