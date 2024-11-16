let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let sign_up = document.querySelector("#sign_up");


sign_up.addEventListener("click",function(e){
        e.preventDefault();
        if(username.value == "" || email.value == "" || password.value == ""){
            alert("please fill all the data");
        }
        else{
            localStorage.setItem("username",username.value);
            localStorage.setItem("email",email.value);
            localStorage.setItem("password",password.value);

            setTimeout( () => { window.location = "login.html"},1000)
        }
          
})