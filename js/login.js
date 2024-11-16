let username = document.querySelector("#username");
let password = document.querySelector("#password");
let logIn = document.querySelector("#log_in");

let getuser = localStorage.getItem("username");
let getpassword = localStorage.getItem("password");

logIn.addEventListener("click" , function(e){
    e.preventDefault();
    if(username.value == "" ||  password.value == ""){
        alert("please fill all the data");
    }
    else{ 
        
    if((getuser && getuser.trim() == username.value.trim()) && (getpassword && getpassword ==  password.value) ) 
        {setTimeout( () => { window.location = "index.html"},1000)}
   
    else{
        alert("your username or password are wrong")
    }
    
    }
        
    
})


