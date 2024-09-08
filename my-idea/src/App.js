import logo from './logo.svg';
import './App.css';
import useScreenSize from './useScreenSize';
import useLocalStorage from './useLocalStorage';

function App() {
  const {width,height}=useScreenSize();
  const { }=useLocalStorage();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}
         {width} : {height}
        {/* </a> */}
      </header>
    </div>
  );
}

export default App;
