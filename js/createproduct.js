let productName = document.getElementById("product-name");
let productDescription = document.getElementById("product-description");
let productSelection = document.getElementById("create-product-select");
let productForm = document.getElementById("create-product-form");
let productsizevalue;
let imagechoose = document.getElementById("choose-image");
//events
productSelection.addEventListener("change",addProductSizevalue);
productForm.addEventListener("submit",addProductfun);
imagechoose.addEventListener("change",uploadimage);

//function
function addProductSizevalue(e){
    productsizevalue = e.target.value;
}

function addProductfun(e){
    e.preventDefault();
    let namevalue = productName.value;
    let descvalue = productDescription.value ;
    let selectvalue = productSelection.value;
    let allproduct = JSON.parse(localStorage.getItem("product")) || productDB ;

    if(namevalue && descvalue && selectvalue){
        let obj = {
            id: allproduct ? allproduct.length + 1 : 1,
            qty : 1,
            imageUrl:imagechoose,
            size: productsizevalue,
            title: namevalue,
            isMe: "y",
        };
    
        let newproduct = allproduct ? [...allproduct,obj] : [obj];
        localStorage.setItem("product" ,JSON.stringify(newproduct));
    
        productName.value = "";
        productDescription.value = "";
        productSelection.value = "";

        setTimeout(() => {window.location = "index.html"},500);

    }else{
        alert("right all the data")
    }
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