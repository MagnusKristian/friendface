import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import Login from "./Pages/Login/Login.js";


import logo from './logo.svg';
import './App.css';
// import { Login } from './Components/login/login.js';
import {NavBar } from "./Components/NavBar/NavBar"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
           {/* Dont change the three above*/ }
          
           <Route path="login" element={<Login />} />


          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
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