import logo from './logo.svg';
import './App.css';
import useScreenSize from './useScreenSize';
import useLocalStorage from './useLocalStorage';

function App() {
  const {width,height}=useScreenSize();
  const [ value, setValue]=useLocalStorage("Me", "Nidhi")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         {width} : {height}
         {theme} : {value}
      </header>
      <button onClick={() => value === "Shri" ? setValue("Nidhi") : setValue("Shri")}>Toggle theme</button>
    </div>
  );
}

export default App;

// To DO 
// 1. Why not { } ?
// 2.for multiple storage , do we need ?
// how does React useState works ?
