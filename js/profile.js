//get data from localstorage
let user_name = localStorage.getItem("username");
let user_email = localStorage.getItem("email");
let product = JSON.parse(localStorage.getItem("product")) || productDB;
let myproducts = product.filter((i) => i.isMe == "y");

//variable
let userDom2 = document.querySelector(".username");
let userEmail = document.querySelector(".email");
let productlenght = document.querySelector(".product-lenght span");
let productlenght2 = document.querySelector(".product-lenght")

userDom2.innerHTML = user_name;
userEmail.innerHTML = user_email;

if(myproducts.length !== 0){
    productlenght.innerHTML = myproducts.length;
}else{
    productlenght2.remove();
}
