let userInfo = document.querySelector("#user_info");
let userDom = document.querySelector("#user");
let lenks = document.querySelector("#lenks");
let logout = document.querySelector("#logout")

if(localStorage.getItem("username")){
    lenks.remove()
    userInfo.style.display = "flex"
    userDom.innerHTML = localStorage.getItem("username")
}


logout.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(() => {window.location = "registre.html" },1500)
})

