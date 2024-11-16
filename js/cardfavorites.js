let allitemDom = document.querySelector(".allitem");
let noproduct = document.querySelector(".noproduct");


function drawproductsfavoritescard(allitems = []){

    if(JSON.parse(localStorage.getItem("productfavorited")).length == 0 ){
    noproduct.innerHTML = "there is no product in the shop";}

    let products = JSON.parse(localStorage.getItem("productfavorited")) || allitems;

    let productsUI = products.map( (item) => {
        return ` 
        <div class="items">
                <div class="item-one">
                  <img src="${item.imageUrl} " alt="this is iamge of our product" title="shoes product"/>
                </div>

                <div class="item-description">
                  <h2 >${item.title}</h2>
                  <span>size : ${item.size} <br> foot size : 43 <br> color: white <br> quantity :${item.qty}  </span>
                  <p >200$</p>
                </div>

                <div class="add-product">
                <i class="fa-regular fa-heart"></i>  
                <button class="add-btn" onclick="removeproductfromfavorites(${item.id})">remove from favorite</button> 
                </div>
            </div>
        `
    })

    allitemDom.innerHTML = productsUI.join("");
}

drawproductsfavoritescard();

//remove item from favorites

function removeproductfromfavorites(id){
    let productfavorited = localStorage.getItem("productfavorited");

    if(productfavorited){
    let items = JSON.parse(productfavorited);

    let filteredItems = items.filter( (item) => item.id != id );
    localStorage.setItem('productfavorited', JSON.stringify(filteredItems));
    drawproductsfavoritescard(filteredItems);

    }
};
