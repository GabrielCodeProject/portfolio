import React from 'react';
import './App.css';
import profileImage from './img/agathe.jpg';
function App() {
  return (
    <div className="App">
      <h1>TA Soeur</h1>
      <h2>Agathe</h2>
      <p>Game designer, im very good at making art design and game design :)</p>
      <img src={profileImage} alt="Agathe" />

    </div>
  );
}

export default App;
