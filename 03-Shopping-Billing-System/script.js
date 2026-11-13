// Mini Shopping and Billing System
// Step 1 -> Product data

// create first product
let product1 = {
    productId: 101,
    productName: "Milk",
    category: "Diary",
    price: 30,
    available: true
};
let product2 = {
    productId: 102,
    productName: "Bread",
    category: "Bakery",
    price: 40,
    available: true
};
let product3 = {
    productId: 103,
    productName: "Eggs",
    category: "Dairy",
    price: 60,
    available: true
};
let product4 = {
    productId: 104,
    productName: "Rice",
    category: "Grocery",
    price: 80,
    available: true
};

let product5 = {
    productId: 105,
    productName: "Sugar",
    category: "Grocery",
    price: 45,
    available: true
};

// creating product catalog
let products = [product1, product2, product3, product4, product5];
// each array ele contains a complete product object


// Display Product Catalog
// when customer opens our shopping system, they should see all available products with their details

function displayProducts() {

    console.log("========================================");
    console.log("          SMART MART - PRODUCTS");
    console.log("========================================");
    console.log("Product ID | Product Name | Price");
    console.log("----------------------------------------");
    console.log(
        products[0].productId + " | " +
        products[0].productName + " | Rs." +
        products[0].price
    );
    console.log(
        products[1].productId + " | " +
        products[1].productName + " | Rs." +
        products[1].price
    );
    console.log(
        products[2].productId + " | " +
        products[2].productName + " | Rs." +
        products[2].price
    );
    console.log(
        products[3].productId + " | " +
        products[3].productName + " | Rs." +
        products[3].price
    );
    console.log(
        products[4].productId + " | " +
        products[4].productName + " | Rs." +
        products[4].price
    );

    console.log("----------------------------------------");
    console.log("Total Products: " + products.length);
    console.log("========================================");
}
// displayProducts();


// shopping Cart
let cart = [];

function addToCart(product, quantity){
    let cartItem = {
        productId: product.productId,
        productName: product.productName,
        price: product.price,
        quantity: quantity,
        totalPrice: product.price * quantity
    };
    cart[cart.length] = cartItem;
    console.log(product.productName + " added to cart!");
}


// display shopping cart
function displayCart() {
    console.log("==================================");
    console.log("          SHOPPING CART");
    console.log("==================================");
    console.log(
        cart[0].productName +
        " | Price: Rs." + cart[0].price +
        " | Quantity: " + cart[0].quantity
    );
    console.log(
        cart[1].productName +
        " | Price: Rs." + cart[1].price +
        " | Quantity: " + cart[1].quantity
    );
    console.log(
        cart[2].productName +
        " | Price: Rs." + cart[2].price +
        " | Quantity: " + cart[2].quantity
    );
    console.log("==================================");
}

// Display cart
// displayCart();

/*
Note: This first version displays three cart 
items because we are avoiding loops. 
We will keep this limitation in mind 
while building the project. */
// Prodcuts Array
// contains all available products
// ->
// addToCart(product, quantity)
// ->
// Receives product and quantity
// ->
// Cart Array
// ->
// Stores selected product objects
// ->
// displayCart()
// ->
// Displays selected items



// Product-wise Price Calculation

function displayCalculatedPrices() {
    console.log("==============================================");
    console.log("             PRODUCT PRICE DETAILS");
    console.log("==============================================");
    console.log(
        cart[0].productName + " | " +
        cart[0].price + " x " +
        cart[0].quantity + " = Rs." +
        cart[0].totalPrice
    );
    console.log(
        cart[1].productName + " | " +
        cart[1].price + " x " +
        cart[1].quantity + " = Rs." +
        cart[1].totalPrice
    );
    console.log(
        cart[2].productName + " | " +
        cart[2].price + " x " +
        cart[2].quantity + " = Rs." +
        cart[2].totalPrice
    );
    console.log(
        cart[3].productName + " | " +
        cart[3].price + " x " +
        cart[3].quantity + " = Rs." +
        cart[3].totalPrice
    );
    console.log(
        cart[4].productName + " | " +
        cart[4].price + " x " +
        cart[4].quantity + " = Rs." +
        cart[4].totalPrice
    );
    console.log("==============================================");
}

// displayCalculatedPrices();

// Subtotal Calculation

