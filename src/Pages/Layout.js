import { Link, Outlet } from "react-router-dom";
import logo from '../logo.svg';
import { NavBar } from "../Components/NavBar/NavBar";

const Layout = () => {
  return (
    <>
    <NavBar/>
      <nav style={{fontSize:"xx-large", float: "left"}}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <br/>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>


          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <br/>
        <br/>
      </header>
    </div>
      <Outlet />
    </>
  )
};

export default Layout;