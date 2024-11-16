let placeaddproduct = document.querySelector(".drop-shop-card div");
let badg = document.querySelector(".badg");
let placeaddproductdisplay = document.querySelector(".drop-shop-card");
let shop = document.querySelector(".shop");


//check if there is item in lcal storage
let addproductstring = localStorage.getItem("productshoped") ? JSON.parse(localStorage.getItem("productshoped")) : [];

if(addproductstring){
    addproductstring.map((item) => {
        placeaddproduct.innerHTML += `<p>${item.title} ${item.qty}</p>`;
    })
    badg.style.display = "block";
    badg.innerHTML += addproductstring.length;
};

//open shop menu
function openshop(){
    if(placeaddproduct.innerHTML != "")
        if(placeaddproductdisplay.style.display == "block" ){
            placeaddproductdisplay.style.display = "none" 
        }else
          placeaddproductdisplay.style.display = "block"
}
shop.addEventListener("click" , openshop);