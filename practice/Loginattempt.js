//we have system username and password
let username = "tester";
let password = 12345;

//user enter username and password
let uname = "tester";
let pward = 1235;

//attempt define
let attempt = 0;
let maxattempt = 3;

//check attempt is less than maxattempt
if(attempt <= maxattempt){
    if(uname === username && pward === password){
        console.log("You login successfully");
    }
    else{
        attempt++;
        console.log("Invalid Credentials. Attempts left:", maxattempt - attempt);
    }
}else{
     console.log("Account Locked");
}