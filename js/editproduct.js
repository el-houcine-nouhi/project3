let product = JSON.parse(localStorage.getItem("product")) || productDB;
let editproductId = JSON.parse(localStorage.getItem("editproduct"));
let getproduct = product.find((i) => i.id == editproductId);
console.log(getproduct);


let productName = document.getElementById("product-name");
let productDescription = document.getElementById("product-description");
let productSelection = document.getElementById("create-product-select");
let updateform = document.getElementById("update-product-form");
let imagechoose = document.getElementById("choose-image");
let productsizevalue;


productName.value = getproduct.title;
productDescription.value = getproduct.desc;
productSelection.value = getproduct.size;
productsizevalue = getproduct.imageUrl;


//events
productSelection.addEventListener("change",getproductSizeValue);
updateform.addEventListener("submit",updateproductfun);
imagechoose.addEventListener("change",uploadimage);

//function
function getproductSizeValue(e){
    productsizevalue = e.target.value;
}


function updateproductfun(e){
    e.preventDefault();

    getproduct.title = productName.value;
    getproduct.desc = productDescription.value ;
    getproduct.size = productSelection.value  ;
    getproduct.imageUrl = imagechoose ;
    localStorage.setItem("product" ,JSON.stringify(product));
    console.log(getproduct);
    setTimeout(() => { window.location = "index.html"},500)
};

//choose file section
function uploadimage(){
      let file = this.files[0];
    let types = ["image/jpeg","image/png"]
      if(types.indexOf(file.type) == -1){
        alert("this type of image is note support");
        return;
      }
      
      if(file.size > 2 * 1024 *1024){
        alert("the size need to bee less than 2MB");
        return;
      }
      //imagechoose = URL.createObjectURL(file);
      getimagebase64(file);
}

function getimagebase64(file){
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = function(){
        imagechoose = reader.result;
    };

    reader.onerror = function(){
        alert("theres a problem");
    };
}

