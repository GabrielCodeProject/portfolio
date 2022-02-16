import logo from './logo.svg';
import './App.css';
import profileImage from './img/agathe.jpg';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>TA Soeur</h1>
      <h2>Agathe</h2>
      <img src={profileImage} alt="Agathe" />
    </div>
  );
}

export default App;
