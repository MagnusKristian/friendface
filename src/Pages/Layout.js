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
            1
          </li>
          <li>
            2
          </li>
          <li>
            3
          </li>
          <li>
            4
          </li>
          <li>
            4
          </li>
          <li>
            5
          </li>
          <li>
            6
          </li>
        </ul>
      </nav>
      
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{width:"10%"}}/>
        <br/>
      
      <Outlet />

      </header>
    </div>
    </>
  )
};

export default Layout;