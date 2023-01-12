import { LoginForm } from "../../Components/Login/LoginForm";
import {CreateUserForm } from "../../Components/CreateUser/CreateUserForm";

const Login = () => {
  let SignUp = true;
  //gotta get some state up in this b...
  return (
    <>
    <h1>Login</h1>
    {SignUp&& <CreateUserForm/>}
    {!SignUp&& <LoginForm/>}
      {/* <LoginForm/> */}
      <br/>
            <div>Not a user? Sign up here: </div>
            <button onClick={()=>{
              console.log("signup to true");
              console.log(SignUp);
              console.log("change 'signup'...");

              SignUp = true
              console.log(SignUp);

              }}>SIGN UP</button>
    </>
  );
};

export default Login;