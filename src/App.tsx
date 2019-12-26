import React, { useState } from 'react';
import grover from './grover.webp'
import AlertButton from './AlertButton';
import './App.css';



const App: React.FC = () => {
  const [showMessage, setShowMessage] = useState<String>("");
  const toggleMessage = (message: String) => {
    setShowMessage(message);
    setTimeout(() => setShowMessage(""), 2000);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={grover} alt="logo" />
        {showMessage &&
          <div>
            {showMessage}
          </div>
        }
        <div className="alert_button_container">
          <AlertButton click={() => toggleMessage}/>
        </div>

      </header>
    </div>
  );
}

export default App;
