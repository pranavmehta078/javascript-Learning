//user details
let user ={
    name:"pranav",
    email:"user@gmail.com",
    password:"123456"
}

//check for validation

if(user.name !=="" && user.email.includes('@') && user.password.length >=6){
    console.log("Form submitted successfully");
}else {
  console.log("Validation Failed");
}