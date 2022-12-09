// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import NoPage from "./Pages/NoPage/NoPage";
import Login from "./Pages/Login/Login.js";
import Profile from "./Pages/Profile/Profile.js";
import Search from "./Pages/Search/Search.js";
import Settings from "./Pages/Settings/Settings.js";
import Extra from "./Pages/Extra/Extra";
import { useState } from "react";

// import React from "react";
// import { ProvideAuth } from "./use-auth.js";




// import logo from './logo.svg';

import './App.css';
import PostFeedPage from "./Pages/PostFeedPage/PostFeedPage";

// import { Login } from './Components/login/login.js';
// import {NavBar } from "./Components/NavBar/NavBar"

// const LoggedIn = process.env.REACT_APP_loggedIn;

    // let button;
    // if (isLoggedIn) {
    //   console.log("logged in");
    //   // button = <LogoutButton onClick={this.handleLogoutClick} />;
    // } else {
    //   console.log("NOT logged in");

    //   // button = <LoginButton onClick={this.handleLoginClick} />;
    // }

     //this.state.isLoggedIn;

    


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogIn = () => { 
    console.log("toggle");
    if(isLoggedIn == true){
      setIsLoggedIn(false);
      console.log("isLoggedIn = false;");
      return;
    }
    if(isLoggedIn == false){
      setIsLoggedIn(true);

      console.log("isLoggedIn = true;");
      return;
    }
  }

  const loggedInRoutes = (
    <>
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
             <Route path="extra" element={<Extra />} />
             <Route path="postfeedpage" element={<PostFeedPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>  );
    const notLoggedInRoutes = (<>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
             {/* Dont change the three above*/ }
             <Route path="login" element={<Login />} />
             <Route path="profile" element={<Login />} />
             <Route path="search" element={<Login />} />
             <Route path="settings" element={<Login />} />
             <Route path="extra" element={<Login />} />
             <Route path="postfeedpage" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>  );
    const routes = isLoggedIn? loggedInRoutes:notLoggedInRoutes;
      const trueornot = isLoggedIn.toString();
      console.log(trueornot);

  return (
    <>
    <div style={{position:"absolute",right:"1em",float:"left", display:"flex",}}>
      <p style={{fontSize:"large",fontWeight:"bold", marginRight:"1em"}}>Currently logged in: {trueornot}.</p>
      <button onClick={toggleLogIn}>Toggle login</button>
    </div>
    {routes}

    </>

  // <>
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Layout />}>
  //         <Route index element={<Home />} />
  //         <Route path="*" element={<NoPage />} />
  //          {/* Dont change the three above*/ }
  //          <Route path="login" element={<Login />} />
  //          <Route path="profile" element={<Profile />} />
  //          <Route path="search" element={<Search />} />
  //          <Route path="settings" element={<Settings />} />
  //          <Route path="extra" element={<Extra />} />
  //          <Route path="postfeedpage" element={<PostFeedPage />} />
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  // </>  
  );
}

export default App;








// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<LoginControl />);






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