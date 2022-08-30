let carts = document.querySelectorAll('.add-cart')


let products = [
    {
        name : 'Beef',
        tag : 'product-1',
        price : 30,
        inCart : 0,
    },
    {
        name : 'Banana',
        tag : 'product-2',
        price : 25,
        inCart : 0,
    },
    {
        name : 'Guava',
        tag : 'product-3',
        price : 25,
        inCart : 0,
    },
    {
        name : 'Fried Chicken',
        tag : 'product-4',
        price : 10,
        inCart : 0,
    },
    {
        name : 'Tropicana',
        tag : 'product-5',
        price : 10,
        inCart : 0,
    },
    {
        name : 'Fruit',
        tag : 'product-6',
        price : 15,
        inCart : 0,
    },
    {
        name : 'Sliwki',
        tag : 'product-7',
        price : 15,
        inCart : 0,
    },
    {
        name : 'Apples',
        tag : 'product-8',
        price : 15,
        inCart : 0,
    },
    {
        name : 'Watermelon',
        tag : 'product-9',
        price : 10,
        inCart : 0,
    },
    {
        name : 'Grape',
        tag : 'product-10',
        price : 5,
        inCart : 0,
    },
    {
        name : 'Hamburger',
        tag : 'product-11',
        price : 1,
        inCart : 0,
    },
    {
        name : 'Mango',
        tag : 'product-12',
        price : 5,
        inCart : 0,
    },
]

for (let i = 0 ; i < carts.length ; i++){
    carts[i].addEventListener('click' , () =>{
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers ;
    }
}

function cartNumbers(product){
     
    let productNumbers = localStorage.getItem('cartNumbers');


    productNumbers = parseInt(productNumbers);

    if (productNumbers){
        localStorage.setItem('cartNumbers' , productNumbers + 1)  
        document.querySelector('.cart span').textContent = productNumbers + 1 ;
    }else{
        localStorage.setItem('cartNumbers' , 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product)
    }

function setItems(product) {
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
    
        if(cartItems != null) {
            if(cartItems[product.name] == undefined) {
                cartItems = {
                    ...cartItems,
                    [product.name]: product
                }
            }
            cartItems[product.name].inCart += 1; 
        } else {
            product.inCart = 1;
            cartItems = {
                [product.name]: product
            }
        }
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    }

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');

    console.log("my cartCost is", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost" , cartCost + product.price);
    }else{
        localStorage.setItem("totalCost" , product.price)
    }
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products")
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems)
    if (cartItems && productContainer){
        productContainer.innerHTML='';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += 

            `
            <div class="product">
            <table width = "100%">
            <tr>
            <td><h4>PRODUCT</h4></td>
            <td><h4>PRICE</h4></td>
            <td><h4>QUANTILY</h4></td>
            <td><h4>TOTAL</h4></td>
            </tr>
            <tr>
            <td>
            <img src="./img/${item.tag}.jpg">
            <span> ${item.name} <a href="#" onclick="deleteItem()" >X</a> </span>
            
            </td>
            <td>
            <span> ${item.price}$</span>
            </td>

            <td>
            <i class="fa-solid fa-plus" onclick="add()"></i>
            ${item.inCart}
            <i class="fa-solid fa-minus" onclick="minus()"></i>
            </td>
            
            <td>${item.price * item.inCart}$</td>
          </tr>
            </table>
            </div>
            `
            ;
        });

        productContainer.innerHTML += `
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">Basket Total</h4>
        <h4 class="baskettotal"> ${cartCost}$</h4>
        `;
    }
}


function deleteItem(product){
    localStorage.removeItem(product)
}
function add(){
    console.log("Running")
}
function minus(){
    console.log('How do you display this.item')
}
    
    onLoadCartNumbers();
    displayCart();
    deleteItem();








