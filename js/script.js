//lets
let userInfo = document.querySelector("#user_info");
let userDom = document.querySelector("#user");
let lenks = document.querySelector("#lenks");
let logout = document.querySelector("#logout");

//check username
if(localStorage.getItem("username")){
    lenks.remove()
    userInfo.style.display = "flex"
    userDom.innerHTML = localStorage.getItem("username")
}


logout.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(() => {window.location = "registre.html" },1500)
})


//******************************************* define product *******************************************
//lets
let allitemDom = document.querySelector(".allitem");
//let placeaddproduct = document.querySelector(".drop-shop-card div");
//let placeaddproductdisplay = document.querySelector(".drop-shop-card");
let product = productDB;

//let shop = document.querySelector(".shop");
let shopli = document.querySelector(".shop");
//let badg = document.querySelector(".badg");

//home product draw
let drawproducts;
(drawproducts = function(product = []){
    let productsUI = product.map( (item) => {
        return ` 
        <div class="items" style=" border : ${item.isMe == "y" ? "1px solid black" : ""} ">
                <div class="item-one">
                  <img src="${item.imageUrl} " alt="this is iamge of our product" title="shoes product"/>
                </div>

                <div class="item-description">
                  <a onclick="saveproductdata(${item.id})">${item.title}</a>
                  <span>size : ${item.size} <br> foot size : 43 <br> color: white </span>
                  ${item.isMe == "y" && "<br><button class='edittpro'  onclick='edittpro(" +item.id+ ")'>edit</button>"}
                  <p ${item.isMe == "y" && "style='padding-top: 15px'"} >200$</p>
                </div>

                <div class="add-product">
                  <i class="fa-regular fa-heart" style="color: ${item.liked == true ? "red" : "" } "onclick="addtofavorite(${item.id})"></i>
                  <button class="add-btn" onclick="addtocard(${item.id})">add to cart</button>
                </div>
            </div>
            
        `
    })

    allitemDom.innerHTML = productsUI.join("");
})(JSON.parse(localStorage.getItem("product")) || product);


//add to cart
function addtocard(id){

    if(localStorage.getItem("username")){
        let product = JSON.parse(localStorage.getItem("product")) || product;
        let products = product.find((item) => item.id == id);
        let isproductincard = addproductstring.some((i) => i.id === products.id);
        
        if(isproductincard){
            addproductstring = addproductstring.map((p) => {
                if(p.id === products.id) 
                p.qty += 1; 
                return p;
            });
        }else{
            addproductstring.push(products);
        };
        placeaddproduct.innerHTML = "";

        addproductstring.forEach(item => {placeaddproduct.innerHTML += `<p>${item.title}${item.qty}`});


        //save data
        localStorage.setItem("productshoped",JSON.stringify(addproductstring));
        //add counter of item
        let cardproductlengh = document.querySelectorAll(".drop-shop-card div p");
        badg.style.display = "block";
        badg.innerHTML = cardproductlengh.length;

    }else{
      setTimeout(() => window.location = "login.html",1000)
    }

 
}

function uniquearr(arr,filterarr){
    let unique = arr.map((item) => item[filterarr])
    .map((item,i,finalarr) => finalarr.indexOf(item) == i && i)
    .filter((item)=> arr[item])
    .map((item)=> arr[item]);
    return unique;
}



function saveproductdata(id){
    localStorage.setItem("productId" , id);
    window.location = "cartdetail.html";
};

//**********************************search section******************************************

let input = document.querySelector(".search");
input.addEventListener("keyup",function(e){
    search(e.target.value ,JSON.parse(localStorage.getItem("product")));
    if(e.target.value.trim() == ""){
        drawproducts(JSON.parse(localStorage.getItem("product")));
    }
})

function search(title,arrayproduct){
    let arr = arrayproduct.filter((item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1 );
    drawproducts(arr);
};


//add to favorite
let favoriteitem = localStorage.getItem("productfavorited") ? JSON.parse(localStorage.getItem("productfavorited")) : [];
function addtofavorite(id){
     
    if(localStorage.getItem("username")){
        let chooseitem = product.find((item) => item.id == id);
        favoriteitem = [...favoriteitem,chooseitem];
        let uniqueproducts =  uniquearr(favoriteitem,"id");
        localStorage.setItem("productfavorited",JSON.stringify(uniqueproducts));
        chooseitem.liked = true;
        product.map((item) => {
            if(item.id == chooseitem.id){
                item.liked = true;
            }
        });
        localStorage.setItem("product",JSON.stringify(product));
        drawproducts(product);

    }else{
      setTimeout(() => window.location = "login.html",1000)
    }

 
}

//filter section

let filtersize = document.querySelector(".filter-size");
filtersize.addEventListener("change",filtersizechange);

function filtersizechange(e){
    let val = e.target.value;

    let product = JSON.parse(localStorage.getItem("product")) || product;

    if( val == "all"){
        drawproducts(product);
    }else{
        product = product.filter((i) => i.size == val);
        drawproducts(product);
    }
}

//edit product button

function edittpro(id){
    localStorage.setItem("editproduct",id);
    window.location = "editproduct.html"
}

