import logo from './logo.svg';
import './App.css';
import { Login } from './login/login.js';
import {NavBar } from "./NavBar/NavBar"


function App() {
  return (
    <>
      <NavBar/>
      <div className="App">
        <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

          <br/>
          <br/>
          <br/>
          <Login/>
        </header>
      </div>
    </>
  );
}

export default App;
