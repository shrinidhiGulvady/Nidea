import logo from './logo.svg';
import './App.css';
// import useScreenSize from './useScreenSize';
import useLocalStorage from './useLocalStorage';

function App() {
  // const [width,height]=useScreenSize();
  const [value, setValue]=useLocalStorage("Me", "Nidhi")
  // const [value1, setValue1]=useLocalStorage("You", "Shri")
  // const [value2, setValue2]=useLocalStorage("He", "Gulvady")
  // setValue2("great")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Hello World 👋
        </p>
      </header>
      <button onClick={() => value === "Shri" ? setValue("Nidhi") : setValue("Shri")}>Toggle theme</button>
    </div>
  );
}

export default App;

// To DO 
// 1. Why not { } ? : We can as we want 
// 2.for multiple storage , do we need ?
// how does React useState works ?
// how does this useLocaStorage will work 

// things to do 
// All the hooks in linkedin post 
// port folio 
// DSA 21 days 
// high level design 
// low level design 
// perfomance resolve 