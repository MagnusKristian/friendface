import { Outlet } from "react-router-dom";
// import { Link } from "react-router-dom";
// import logo from "../../logo.svg";
import { NavBar } from "../../Components/NavBar/NavBar";

const Layout = () => {
  return (
    <>
    <NavBar/>
      <div className="App main">
        <header className="App-header">
      </header>
      <Outlet />

    </div>
    <div className="main">

    </div>
    </>
  )
};

export default Layout;