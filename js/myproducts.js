let allitemDom = document.querySelector(".allitem");
let noproduct = document.querySelector(".noproduct");

let drawproducts;
(drawproducts = function(product = []){
    let myproducts = product.filter((item) => item.isMe == "y");
    if(myproducts.length != 0){
    let productsUI = myproducts.map( (item) => {
        return ` 
        <div class="items" style=" border : ${item.isMe == "y" ? "1px solid black" : ""} ">
                <div class="item-one">
                  <img src="${item.imageUrl} " alt="this is iamge of our product" title="shoes product"/>
                </div>

                <div class="item-description">
                  <a onclick="saveproductdata(${item.id})">${item.title}</a>
                  <span>size : ${item.size} <br> foot size : 43 <br> color: white </span>
                  <br><button class='edittpro'  onclick='edittpro(${item.id})'>edit</button>
                  <p ${item.isMe == "y" && "style='padding-top: 15px'"} >200$</p>
                </div>

                <div class="add-product">
                  <button class="add-btn" onclick="deleteproduct(${item.id})">delet product</button>
                </div>
            </div>
            
        `
    });
    allitemDom.innerHTML = productsUI.join("");
}
else{
    noproduct.innerHTML = "there is no product";
}
})(JSON.parse(localStorage.getItem("product")) || product);

//edit product button

function edittpro(id){
    localStorage.setItem("editproduct",id);
    window.location = "editproduct.html"
};

//delet product

function deleteproduct(id){
    let product = JSON.parse(localStorage.getItem("product")) || productDB;
    let myproducts = product.filter((item) => item.isMe == "y");
    let filtered = myproducts.filter((i) => i.id !== id);
    drawproducts(filtered);
    let clickeditem = myproducts.find(i => i.id == id);
    product = product.filter(i => i.id !== clickeditem.id);
    localStorage.setItem("product",JSON.stringify(product));
}