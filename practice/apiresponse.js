//API Response Validator

let response ={
    status : 200,
    user:{
    name :"Pranav",
    age : 30
 }
};

if( response.status === 200 &&
  typeof response.user.name === "string" &&
  typeof response.user.age === "number"){
    console.log("API Test Passed");
}
else{
    console.log("API Test Failed");
}