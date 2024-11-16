let getlang = localStorage.getItem("langdir");
if(getlang){
    if(getlang == "rtl"){
        changedir("rtl")
    }else{
        changedir("ltr")
    }
}


//lang dir
let en = document.querySelector(".en_lang");
let ar = document.querySelector(".ar_lang");

ar.addEventListener("click", () => changedir("rtl"));
en.addEventListener("click", () => changedir("ltr"));

function changedir(dir){
    document.documentElement.setAttribute("dir",dir);
    localStorage.setItem("langdir",dir);
}