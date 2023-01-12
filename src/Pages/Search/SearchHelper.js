export const searchFirstName = (searchWord,data)=>{
  // console.log(`Here is the data:  ${JSON.stringify(data)}`);
  // console.log(`Here is the data:  ${data}`);

  console.log(`Searched for first name ${searchWord}`);
  // console.log(` ${x}`);

  return filterNames(searchWord,data);
 }


 const filterNames = (searchWord,data)=>{
  let match;
  let matchName = "x";
  let matchFound = false;
  let allMatches = [];
  data.forEach(element => {
    if(element.name.first.toLowerCase() == searchWord.toLowerCase()){
      console.log("SUCCESS.");
      match = element;
      matchName = element.name.first +" "+ element.name.last;
      matchFound = true;
      allMatches.push(element);
      console.log(element);
      console.log(matchName);
    }
  });
  // console.log("All matches: "+JSON.stringify(allMatches));
  if(matchFound){
  console.log(`Match found for "${searchWord}": "${JSON.stringify(match)}"`);
  return (allMatches);
  }
  else{
  console.log(`No match found for "${searchWord}"...`);
  return ([{"gender":"male","name":{"title":"Mr","first":"FIRSTNAME","last":"TEMPORARY LASTNAME"},"location":{"street":{"number":7436,"name":"Woodland St"},"city":"CITY","state":"STATE","country":"United States","postcode":28568,"coordinates":{"latitude":"16.1075","longitude":"-111.5074"},"timezone":{"offset":"+11:00","description":"Magadan, Solomon Islands, New Caledonia"}},"email":"mason.walker@example.com","login":{"uuid":"aefbf8c3-279a-4998-81ff-278dbb702758","username":"yellowzebra256","password":"aaron","salt":"lDJNMMIa","md5":"825b151513e0a1b4784e34fdb34be515","sha1":"85305bc0e9574b4f454d2501c8a9fba54967404d","sha256":"b41a7aa58b9327a7fba1c8569c169f9ffbbb9dedf549609ed5c7570efbb33502"},"dob":{"date":"1970-04-11T07:16:23.265Z","age":52},"registered":{"date":"2013-03-15T11:26:37.873Z","age":9},"phone":"(774) 214-3506","cell":"(550) 936-2913","id":{"name":"SSN","value":"749-62-6267"},"picture":{"large":"https://randomuser.me/api/portraits/men/83.jpg","medium":"https://randomuser.me/api/portraits/med/men/83.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/83.jpg"},"nat":"US"},]); //TODO: fix this so it doesnt return all results if not found.
  }

 }