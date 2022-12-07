import "./NavBarCss.css";
import { Link, Outlet } from "react-router-dom";

// import { useState } from "react";

export const NavBar = () => {
  // const [count, setCount] = useState(0);

  // const increment = () => { 
  //   setCount(count + 1);
  // }

  function myFunction(e) {
    e.preventDefault();
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <>
      <div className="topnav" id="myTopnav">
        <div className="navPages">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/search">Search</Link>
        <Link to="/settings">Settings</Link>
        {/* <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link> */}

        {/* <a href="#home" className="active">Home#</a>
        <a href="#news">News#</a>
        <a href="#contact">Contact#</a>
        <a href="#about">About#</a> */}
        <a href={{javascript:void(0)}} className="icon" onClick={myFunction}>
          ☰
        </a>
        </div>
        <h1 className="mainLogo">{"{FriendFace?}"}</h1>
        {/* <h1 className="mainLogo">{"{OnceOver?}"}</h1> */}
      </div>
      {/* <Outlet/> */}

    </>
    
  )
}


/*
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
</head>
<body>

<div class="topnav" id="myTopnav">
  <a href="#home" class="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

<div style="padding-left:16px">
  <h2>Responsive Topnav Example</h2>
  <p>Resize the browser window to see how it works.</p>
</div>

<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>

</body>
</html>
*/