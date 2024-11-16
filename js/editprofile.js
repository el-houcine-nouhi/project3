//get data from localstorage
let user_name = localStorage.getItem("username");
let user_email = localStorage.getItem("email");

//variable
let userInput = document.querySelector("#product-name");
let EmailInput = document.querySelector("#product-description");
let editform = document.querySelector("#create-product-form");

userInput.value = user_name;
EmailInput.value = user_email;

//addevent

editform.addEventListener("submit",editprofileinformation);

function editprofileinformation(e){
      e.preventDefault();

      localStorage.setItem("username" ,userInput.value);
      localStorage.setItem("email" ,EmailInput.value);

      setTimeout(() => {window.location = "myprofile.html"},500);
}


