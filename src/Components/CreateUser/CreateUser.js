export function CreateUser(data){
  console.log("Data in createUser function: "+JSON.stringify(data));

  
  
  // const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

  console.log("createnewuser: "+createNewUser());
  let newUser = JSON.parse(createNewUser());
  console.log("newUser: "+JSON.stringify(newUser));
  console.log("Data.users: "+data.users);

  // data[0].push

}

function createNewUser(){
  console.log("Creating new user");

  return ({name:"name",password:"password"})
}