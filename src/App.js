import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nico Gimenez primera App de ReactJs.
        </p>
        <a
          className="App-link"
          href="https://github.com/nickgyta/ReactJsProyect.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mi Github aquí..
        </a>
      </header>
    </div>
  );
}

export default App;
