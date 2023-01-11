export const searchFirstName = (searchWord,data)=>{
  console.log(`Here is the data:  ${JSON.stringify(data)}`);
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
  console.log("All matches: "+JSON.stringify(allMatches));
  if(matchFound){
  console.log(`Match found for "${searchWord}": "${JSON.stringify(match)}"`);
  return (allMatches);
  }
  else{
  console.log(`No match found for "${searchWord}"...`);
  return (data); //TODO: fix this so it doesnt return all results if not found.
  }

 }