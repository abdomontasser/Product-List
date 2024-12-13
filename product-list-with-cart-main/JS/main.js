const data=[
    {
       "image": {
            "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
            "mobile": "./assets/images/image-waffle-mobile.jpg",
            "tablet": "./assets/images/image-waffle-tablet.jpg",
            "desktop": "./assets/images/image-waffle-desktop.jpg",
            "Cart":"./assets/images/icon-add-to-cart.svg"
       },
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
            "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
            "desktop": "./assets/images/image-creme-brulee-desktop.jpg",
            "Cart":"./assets/images/icon-add-to-cart.svg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
            "mobile": "./assets/images/image-macaron-mobile.jpg",
            "tablet": "./assets/images/image-macaron-tablet.jpg",
            "desktop": "./assets/images/image-macaron-desktop.jpg",
            "Cart":"./assets/images/icon-add-to-cart.svg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
            "mobile": "./assets/images/image-tiramisu-mobile.jpg",
            "tablet": "./assets/images/image-tiramisu-tablet.jpg",
            "desktop": "./assets/images/image-tiramisu-desktop.jpg",
            "Cart":"./assets/images/icon-add-to-cart.svg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
            "mobile": "./assets/images/image-baklava-mobile.jpg",
            "tablet": "./assets/images/image-baklava-tablet.jpg",
            "desktop": "./assets/images/image-baklava-desktop.jpg",
            "Cart":"./assets/images/icon-add-to-cart.svg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
            "mobile": "./assets/images/image-meringue-mobile.jpg",
            "tablet": "./assets/images/image-meringue-tablet.jpg",
            "desktop": "./assets/images/image-meringue-desktop.jpg",
            "Cart":"./assets/images/icon-add-to-cart.svg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
            "mobile": "./assets/images/image-cake-mobile.jpg",
            "tablet": "./assets/images/image-cake-tablet.jpg",
            "desktop": "./assets/images/image-cake-desktop.jpg",
            "Cart":"./assets/images/icon-add-to-cart.svg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
            "mobile": "./assets/images/image-brownie-mobile.jpg",
            "tablet": "./assets/images/image-brownie-tablet.jpg",
            "desktop": "./assets/images/image-brownie-desktop.jpg",
            "Cart":"./assets/images/icon-add-to-cart.svg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
            "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
            "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
            "desktop": "./assets/images/image-panna-cotta-desktop.jpg",
            "Cart": "./assets/images/icon-add-to-cart.svg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
     }
]
// Select the needed elements
const main_div=document.getElementById("container-div")
const sub_div=document.getElementById("sub-container-div")
const cart_img=document.getElementById("cart-img")
const cart_title=document.querySelector(".item-description")
const send_order=document.querySelector(".checkout-order")
const checkoutItems=document.querySelector(".add-item")
const itemRecipt=document.querySelector(".checkout-receipt")
const new_order=document.getElementById("new-order")
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const placed_items=document.getElementById("placed-items")




const cart=[]

let htmlContent=''

data.forEach((item, index) => {
    htmlContent += ` 
        <div class="item">
            <div class="photo-button">
                <img src="${item.image.desktop}" alt="${item.name}" class="product-img">
                <button id="item-button-${index}">
                    <img src="${item.image.Cart}" alt="${item.name}" class="btn-icon">
                    Add to Cart
                </button>
            </div>
            <div class="itemCategory">
                <h5>${item.category}</h5>
                <p>${item.name}</p>
                <span>$${item.price.toFixed(2)}</span>
            </div>
        </div>
    `;
});
    sub_div.innerHTML=htmlContent

// Function to add item to the cart
function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCartUI(); 
}

data.forEach((item, index) => {
    const button = document.getElementById(`item-button-${index}`);
    button.addEventListener('click', () => {
        data.forEach((_, i) => {
            const otherButton = document.getElementById(`item-button-${i}`);
            otherButton.classList.remove('button-add');
        });

        // Add the class to the selected button
    button.classList.add('button-add');
    addToCart(item) 
    cart_img.classList.add('d-none')
    cart_title.classList.add('d-none')
});
});

function updateCartUI() {
 

    // Clear the cart items list
    cartItems.innerHTML = "";

    // Render each item in the cart
    let total = 0;
    let totalCount = 0;
    cart.forEach(cartItem => {
        const li = document.createElement('li');
        li.textContent = ` ${cartItem.quantity} - ${cartItem.name}  - $${(cartItem.price * cartItem.quantity).toFixed(2)}`;
        cartItems.appendChild(li);

        // Calculate the total price
        total += cartItem.price * cartItem.quantity;
        totalCount += cartItem.quantity;
    });

    // Update the total price
    cartTotal.textContent = `OrderTotal: $${total.toFixed(2)}`;
    placed_items.textContent=totalCount
}
send_order.addEventListener("click", function(e) {
    // Prevent default behavior (if this is part of a form submission)
    e.preventDefault();

    // Check if the cart is empty
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items to the cart before placing an order.");
        return; // Stop further execution if the cart is empty
    }

    let total = 0;
    cart.forEach(cartItem => {
        // Create list item and total span
        const li = document.createElement('li');
        const span = document.createElement("span");

        // Calculate total for each cart item
        total += cartItem.price * cartItem.quantity;

        // Set text content for the list item and total span
        li.textContent = `${cartItem.quantity} - ${cartItem.name} - $${(cartItem.price * cartItem.quantity).toFixed(2)}`;
        span.textContent = `Order Total: $${total.toFixed(2)}`;

        // Append to the checkout items
        checkoutItems.appendChild(li);
        checkoutItems.appendChild(span);
    });

    // Show the receipt section
    itemRecipt.classList.remove('hide');
});

new_order.addEventListener("click", function () {
    
    itemRecipt.classList.add('hide');


    cart_img.classList.remove('d-none');
    cart_title.classList.remove('d-none');

    
    cartItems.innerHTML = '';
    cartTotal.textContent = 'Order Total: $0.00';


    placed_items.textContent = 0;

    
    cart.length = 0; 
});