// import './logincss.css'
// import React from 'react'


// class Login extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
// // export function Login() {
// //   return (
// //     <div className="Login">
// //       Oh hi there.
// //     </div>
// //   );
// // }
// export default Login;


import { useState } from "react";

export const Login = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  //const [username, setUsername] = useState();
  //const [password, setPassword] = useState();

  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setFormValue((prevState)=>{
      return {
        ...prevState,
        [name]:value,
      };
    });
  };
  const { username, password } = formValue;

  //this.handleSubmit = this.handleSubmit.bind(this);

  const signIn = () => { 
    setCount1(count1 + 1);
  }
  const signUp = () => { 
    setCount2(count2 + 1);
  }

  // const handleChange = (e) => { 
  //   setUsername(e.target.value);
  //   console.log(e.target.value);
  // }
  const handleSubmit = (e) => { 
    e.preventDefault();
    alert('Name: ' + e.target[0].value +'\nPassword: '+e.target[1].value);
    console.log(e.target[0].value);
    console.log(e.target[1].value);
  }

  return (
    <>
      <div className="LoginPanel" style={{border: '1px solid rgba(0, 0, 0)', height:"33vh", width: "33vw"}}>
        <div className="LoginForm" style={{border: '1px solid rgba(0, 0, 0)'}}>
          <form onSubmit={handleSubmit}>
            <label >Username:</label>
            <div className="showUsernameDiv" style={{fontSize:"large"}}>{username} </div>
            <input type="text" id="username" name="username" placeholder="Enter username here" onChange={handleChange}/>
            <br/>

            <label >Password:</label>
            <div className="showPasswordDiv" style={{fontSize:"large"}}>{password} </div>
            <input type="password" id="password" name="password" placeholder="Enter password here" onChange={handleChange}/>
            <br/>
            <input type="submit" value="Submit"/>
          </form> 

        </div>
        <div style={{display:"flex", justifyContent: "space-evenly"}}>
          <p>Count1: {count1}</p>
          <p>Count2: {count2}</p>
        </div>
        
        <hr></hr>
        <div style={{display:"flex", justifyContent: "space-evenly"}}>
          <button onClick={signIn}>sign in</button>
          <button onClick={signUp}>sign up</button>
        </div>
        
      </div>
    </>
    
  )
}
// export default Login;

// onSubmit={e => e.preventDefault()} prevent default, on the form.