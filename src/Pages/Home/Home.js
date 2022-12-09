import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import { PostFeed } from "../../Components/PostFeed/PostFeed";

const Home = () => {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" style={{width:"10%"}}/>
      <h1>Home</h1>
      <Link to="/Extra" style={{fontSize: "4vw", backgroundColor:"rgba(0,0,0,0.1)", borderRadius:"10px",color:"dodgerBlue"}}>{"<Extra>"}</Link>
      <hr/>
      <Link to="/postfeedpage" style={{fontSize: "4vw", backgroundColor:"rgba(0,0,0,0.1)", borderRadius:"10px",color:"dodgerBlue"}}>{"<Post feed>"}</Link>

      {/* <PostFeed/> */}

    </>
  );
  
};

export default Home;