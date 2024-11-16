let product = JSON.parse(localStorage.getItem("product"));
let productId = localStorage.getItem("productId");
let itemDom = document.querySelector(".item-detail")
let productdetails = product.find((item) => item.id == productId);

itemDom.innerHTML = 
              `<img src="${productdetails.imageUrl}" alt="this is product"/>
                <div class="item-detail-info">
                <h2>${productdetails.title}</h2>
                <span>${productdetails.size}</span><br>                
                <span>foot size : 43</span><br>
                <span>quantity : ${productdetails.qty}</span><br>
                <p>price : 200$</p><br>
               </div>`