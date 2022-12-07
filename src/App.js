// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import NoPage from "./Pages/NoPage/NoPage";
import Login from "./Pages/Login/Login.js";
import Profile from "./Pages/Profile/Profile.js";
import Search from "./Pages/Search/Search.js";
import Settings from "./Pages/Settings/Settings.js";



// import logo from './logo.svg';
import './App.css';
// import { Login } from './Components/login/login.js';
// import {NavBar } from "./Components/NavBar/NavBar"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
           {/* Dont change the three above*/ }
           <Route path="login" element={<Login />} />
           <Route path="profile" element={<Profile />} />
           <Route path="search" element={<Search />} />
           <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;


//org:
/*
<>
      <NavBar/>
      <div className="App">
        <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> *///}

//         <br/>
//         <br/>
//         <br/>
//         <Login/>
//       </header>
//     </div>
//   </>
// */