import React from 'react';
import './App.css';
import picture from './img/victor.jpg'
function App() {
  return (
    <div className="App">
      <h1>Big boi programmeur</h1>
      <p>formation programmation jeux video</p>
      <p>Experience CodeBox and work with daddy as a internship</p>
      <img src={picture} alt="Big boi" />
      <footer>
        <p>Lien utile pour un github page</p>
        <a href='https://github.com/gitname/react-gh-pages' >tutorial</a>
      </footer>
    </div>
  );
}

export default App;
