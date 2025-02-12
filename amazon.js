    // Ensure the script runs after the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Get all buttons with class 'add-to-cart-btn'
        const buttons = document.querySelectorAll('.add-to-cart-btn');

        // Add event listeners to all buttons
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                // Get product name and price from the button's data attributes
                const productName = this.getAttribute('data-product');
                const productPrice = this.getAttribute('data-price');

                // Show a prompt when button is clicked
                alert(`${productName} has been successfully added to your cart. Price: $${productPrice}`);
            });
        });
    });

    function toggleChat() {
    var chatBox = document.getElementById("chat-box");
    if (chatBox.style.display === "none") {
        chatBox.style.display = "block";
    } else {
        chatBox.style.display = "none";
    }
}

// Function to close chat box
function closeChat() {
    document.getElementById("chat-box").style.display = "none";
}

// Function to validate and send message
function sendMessage() {
    const message = document.getElementById("user-message").value;
    
    // Check for empty message
    if (!message.trim()) {
        alert("Please enter a message.");
        return;
    }
    
    // Message length validation
    if (message.length > 200) {
        alert("Message is too long! Please limit your message to 200 characters.");
        return;
    }

    // Blocked words check
    const blockedWords = ["spam", "unknown", "test"];
    for (let word of blockedWords) {
        if (message.toLowerCase().includes(word)) {
            alert("Your message contains inappropriate or restricted words.");
            return;
        }
    }

    // If all validations pass
    alert("Message sent successfully!");
    closeChat(); // Close chat after sending the message
}



function startCountdown() {
    var endDate = new Date("February 20, 2025 23:59:59").getTime();
    var timer = setInterval(function() {
        var now = new Date().getTime();
        var distance = endDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("timer").innerHTML = "Sale Ended";
        }
    }, 1000);
}
startCountdown();


// let cart = []; // Array to store added products and their quantities

// // Function to add items to the cart
// document.querySelectorAll('.add-to-cart-btn').forEach(button => {
//     button.addEventListener('click', function() {
//         const productName = this.getAttribute('data-product');
//         const productPrice = parseFloat(this.getAttribute('data-price'));

//         // Check if the product is already in the cart
//         const existingItem = cart.find(item => item.name === productName);
//         if (existingItem) {
//             // If product is already in cart, just increase quantity
//             existingItem.quantity++;
//         } else {
//             // Otherwise, add new product to cart
//             cart.push({
//                 name: productName,
//                 price: productPrice,
//                 quantity: 1
//             });
//         }

//         // Update the cart modal
//         updateCart();
//     });
// });

// // Function to update the cart modal
// function updateCart() {
//     const cartItemsList = document.getElementById('cart-items-list');
//     const totalPriceElement = document.getElementById('total-price');

//     // Clear the cart items list
//     cartItemsList.innerHTML = '';

//     // Add each item in the cart to the list
//     let totalPrice = 0;
//     cart.forEach(item => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             ${item.name} - $${item.price} x 
//             <button onclick="changeQuantity('${item.name}', -1)">-</button> 
//             ${item.quantity} 
//             <button onclick="changeQuantity('${item.name}', 1)">+</button>
//         `;
//         cartItemsList.appendChild(li);

//         // Update the total price
//         totalPrice += item.price * item.quantity;
//     });

    
//     totalPriceElement.textContent = totalPrice.toFixed(2);
// }

// function changeQuantity(productName, change) {
//     const item = cart.find(item => item.name === productName);
//     if (item) {
//         item.quantity += change;
//         if (item.quantity <= 0) {
           
//             cart = cart.filter(item => item.name !== productName);
//         }
//     }

  
//     updateCart();
// }

// document.getElementById('view-cart-btn').addEventListener('click', function() {
//     document.getElementById('cart-modal').style.display = 'flex';
// });


// document.getElementById('close-cart').addEventListener('click', function() {
//     document.getElementById('cart-modal').style.display = 'none';
// });


// let cart = []; // Array to store added products and their quantities

// // Function to get the user's name
// function getUsername() {
//     return document.getElementById('username').value.trim() || "Anonymous"; // Default to "Anonymous" if no name entered
// }

// // Function to add items to the cart
// document.querySelectorAll('.add-to-cart-btn').forEach(button => {
//     button.addEventListener('click', function() {
//         const productName = this.getAttribute('data-product');
//         const productPrice = parseFloat(this.getAttribute('data-price'));
//         const userName = getUsername(); // Get the user's name

//         // Check if the product is already in the cart
//         const existingItem = cart.find(item => item.name === productName);
//         if (existingItem) {
//             // If product is already in cart, just increase quantity
//             existingItem.quantity++;
//         } else {
//             // Otherwise, add new product to cart with user name
//             cart.push({
//                 name: productName,
//                 price: productPrice,
//                 quantity: 1,
//                 addedBy: userName
//             });
//         }

//         // Update the cart modal
//         updateCart();
//     });
// });

// Function to update the cart modal
// function updateCart() {
//     const cartItemsList = document.getElementById('cart-items-list');
//     const totalPriceElement = document.getElementById('total-price');

//     // Clear the cart items list
//     cartItemsList.innerHTML = '';

//     // Add each item in the cart to the list
//     let totalPrice = 0;
//     cart.forEach(item => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             ${item.name} - $${item.price} x ${item.quantity} (Added by: ${item.addedBy}) 
//             <button onclick="changeQuantity('${item.name}', -1)">-</button> 
//             <button onclick="changeQuantity('${item.name}', 1)">+</button>
//         `;
//         cartItemsList.appendChild(li);

//         // Update the total price
//         totalPrice += item.price * item.quantity;
//     });

//     // Update the total price in the cart
//     totalPriceElement.textContent = totalPrice.toFixed(2);
// }

// // Function to change the quantity of an item in the cart
// function changeQuantity(productName, change) {
//     const item = cart.find(item => item.name === productName);
//     if (item) {
//         item.quantity += change;
//         if (item.quantity <= 0) {
//             // Remove item if quantity is 0 or less
//             cart = cart.filter(item => item.name !== productName);
//         }
//     }

//     // Update the cart modal after changing quantity
//     updateCart();
// }

// // Function to toggle the visibility of the cart modal
// document.getElementById('view-cart-btn').addEventListener('click', function() {
//     document.getElementById('cart-modal').style.display = 'flex';
// });

// // Function to close the cart modal
// document.getElementById('close-cart').addEventListener('click', function() {
//     document.getElementById('cart-modal').style.display = 'none';
// });

// let cart = []; // Array to store added products and their quantities

// // Function to get the user's name
// function getUsername() {
//     return document.getElementById('username').value.trim() || "Anonymous"; // Default to "Anonymous" if no name entered
// }

// // Function to add items to the cart
// document.querySelectorAll('.add-to-cart-btn').forEach(button => {
//     button.addEventListener('click', function() {
//         const productName = this.getAttribute('data-product');
//         const productPrice = parseFloat(this.getAttribute('data-price'));
//         const userName = getUsername(); // Get the user's name

//         // Check if the product is already in the cart
//         const existingItem = cart.find(item => item.name === productName);
//         if (existingItem) {
//             // If product is already in cart, just increase quantity
//             existingItem.quantity++;
//         } else {
//             // Otherwise, add new product to cart with user name
//             cart.push({
//                 name: productName,
//                 price: productPrice,
//                 quantity: 1,
//                 addedBy: userName
//             });
//         }

//         // Update the cart modal
//         updateCart();
//     });
// });

// // Function to update the cart modal
// function updateCart() {
//     const cartItemsList = document.getElementById('cart-items-list');
//     const totalPriceElement = document.getElementById('total-price');

//     // Clear the cart items list
//     cartItemsList.innerHTML = '';

//     // Add each item in the cart to the list
//     let totalPrice = 0;
//     cart.forEach(item => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             ${item.name} - $${item.price} x ${item.quantity} (Added by: ${item.addedBy}) 
//             <button onclick="changeQuantity('${item.name}', -1)">-</button> 
//             <button onclick="changeQuantity('${item.name}', 1)">+</button>
//         `;
//         cartItemsList.appendChild(li);

//         // Update the total price
//         totalPrice += item.price * item.quantity;
//     });

//     // Update the total price in the cart
//     totalPriceElement.textContent = totalPrice.toFixed(2);
// }

// // Function to change the quantity of an item in the cart
// function changeQuantity(productName, change) {
//     const item = cart.find(item => item.name === productName);
//     if (item) {
//         item.quantity += change;
//         if (item.quantity <= 0) {
//             // Remove item if quantity is 0 or less
//             cart = cart.filter(item => item.name !== productName);
//         }
//     }

//     // Update the cart modal after changing quantity
//     updateCart();
// }

// // Function to toggle the visibility of the cart modal
// document.getElementById('view-cart-btn').addEventListener('click', function() {
//     document.getElementById('cart-modal').style.display = 'flex';
// });

// // Function to close the cart modal
// document.getElementById('close-cart').addEventListener('click', function() {
//     document.getElementById('cart-modal').style.display = 'none';
// });

let cart = []; // Array to store added products and their quantities

// Function to add items to the cart
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-product');
        const productPrice = parseFloat(this.getAttribute('data-price'));

        // Check if the product is already in the cart
        const existingItem = cart.find(item => item.name === productName);
        if (existingItem) {
            // If product is already in cart, just increase quantity
            existingItem.quantity++;
        } else {
            // Otherwise, add new product to cart
            cart.push({
                name: productName,
                price: productPrice,
                quantity: 1
            });
        }

        // Update the cart modal
        updateCart();
    });
});

// Function to update the cart modal
function updateCart() {
    const cartItemsList = document.getElementById('cart-items-list');
    const totalPriceElement = document.getElementById('total-price');

    // Clear the cart items list
    cartItemsList.innerHTML = '';

    // Add each item in the cart to the list
    let totalPrice = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - $${item.price} x ${item.quantity} 
            <button onclick="changeQuantity('${item.name}', -1)">-</button> 
            <button onclick="changeQuantity('${item.name}', 1)">+</button>
        `;
        cartItemsList.appendChild(li);

        // Update the total price
        totalPrice += item.price * item.quantity;
    });

    // Update the total price in the cart
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Function to change the quantity of an item in the cart
function changeQuantity(productName, change) {
    const item = cart.find(item => item.name === productName);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            // Remove item if quantity is 0 or less
            cart = cart.filter(item => item.name !== productName);
        }
    }

    // Update the cart modal after changing quantity
    updateCart();
}

// Function to toggle the visibility of the cart modal
document.getElementById('view-cart-btn').addEventListener('click', function() {
    document.getElementById('cart-modal').style.display = 'flex';
});

// Function to close the cart modal
document.getElementById('close-cart').addEventListener('click', function() {
    document.getElementById('cart-modal').style.display = 'none';
});
