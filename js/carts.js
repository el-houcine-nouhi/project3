let productshoped = localStorage.getItem("productshoped");
let allitemDom = document.querySelector(".allitem");
let noproduct = document.querySelector(".noproduct")

if(productshoped){
    let items = JSON.parse(productshoped);
    drawproductstocard(items);
}

function drawproductstocard(products){

    if(JSON.parse(localStorage.getItem("productshoped")).length == 0 ){
    noproduct.innerHTML = "there is no product in the shop";}

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
                <button class="add-btn" onclick="removeItemsFromCart(${item.id})">remove from shop</button> 
                 
                </div>
            </div>
        `
    })

    allitemDom.innerHTML = productsUI.join("");
}

//remove item from shop

function removeItemsFromCart(id){
    let productshoped = localStorage.getItem("productshoped");

    if(productshoped){
    let items = JSON.parse(productshoped);

    let filteredItems = items.filter( (item) => item.id != id );
    drawproductstocard(filteredItems);
    localStorage.setItem('productshoped', JSON.stringify(filteredItems));

    }
};
