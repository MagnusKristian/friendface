import { Outlet } from "react-router-dom";
// import { Link } from "react-router-dom";
// import logo from "../../logo.svg";
import { NavBar } from "../../Components/NavBar/NavBar";

const Layout = () => {
  return (
    <>
    <NavBar/>
      <div className="App">
        <header className="App-header">
        <Outlet />
      </header>

    </div>

    </>
  )
};

export default Layout;