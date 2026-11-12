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
        quantity: quantity
    };
    cart[cart.length] = cartItem;
    console.log(product.productName + " added to cart!");
}


// display shopping cart
