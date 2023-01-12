import { useState } from "react";
import {CreateUser} from "./CreateUser";
import Database from "../../Database.json";

export const CreateUserForm = () => {
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
  const { username} = formValue;
  const { password } = formValue;
  const { password1 } = formValue;
  const { password2 } = formValue;
  const { firstname} = formValue;
  const { lastname } = formValue;

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
    console.log(e.target);
    console.log(e.target["username"].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
    console.log(e.target[3].value);
    CreateUser(Database);
  }

  return (
    <>
      <div className="LoginPanel" style={{border: '1px solid rgba(0, 0, 0)', height:"33vh", width: "33vw",textAlign: "center"}}>
        <div className="LoginForm" style={{border: '1px solid rgba(0, 0, 0)'}}>
          <form onSubmit={handleSubmit}>
          <br/>
          <br/>

            <label >Username:</label>
            <div className="showUsernameDiv" style={{fontSize:"large"}}>{username} </div>
            <input type="text" id="username" name="username" placeholder="Enter username here" onChange={handleChange}/>
            <br/>
            <label >First Name:</label>
            <div className="showfirstnameDiv" style={{fontSize:"large"}}>{firstname} </div>
            <input type="text" id="firstname" name="firstname" placeholder="Enter firstname here" onChange={handleChange}/>
            <br/>
            <label >Last Name:</label>
            <div className="showlastnameDiv" style={{fontSize:"large"}}>{lastname} </div>
            <input type="text" id="lastname" name="lastname" placeholder="Enter lastname here" onChange={handleChange}/>
            <br/>
            <br/>
            <br/>

            <label >Password:</label>
            <div className="showPassword1Div" style={{fontSize:"large"}}>{password1} </div>
            <input type="password" id="password1" name="password1" placeholder="Enter password1 here" onChange={handleChange}/>
            <br/>
            {/* <label >Password:</label>
            <div className="showPassword2Div" style={{fontSize:"large"}}>{password2} </div>
            <input type="password" id="password2" name="password2" placeholder="Enter password2 here" onChange={handleChange}/>
            <br/> */}
            <input type="submit" value="Submit"/>
            <br/>
            <br/>
            <br/>

          </form> 

        </div>
        {/* <div style={{display:"flex", justifyContent: "space-evenly"}}>
          <p>Count1: {count1}</p>
          <p>Count2: {count2}</p>
        </div>
        
        <hr></hr>
        <div style={{display:"flex", justifyContent: "space-evenly"}}>
          <button onClick={signIn}>sign in</button>
          <button onClick={signUp}>sign up</button>
        </div> */}
        
      </div>
    </>
    
  )
}