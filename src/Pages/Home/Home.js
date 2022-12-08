import logo from "../../logo.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" style={{width:"10%"}}/>
      <h1>Home</h1>
      <Link to="/Extra" style={{fontSize: "4vw", backgroundColor:"rgba(0,0,0,0.1)", borderRadius:"10px",color:"dodgerBlue"}}>{"<Extra>"}</Link>

    </>
  );
  
};

export default Home;