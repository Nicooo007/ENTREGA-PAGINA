    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function addToCart(productName, price) {
        const quantityInput = document.querySelector(`input[name="quantity"]`);
        const quantity = parseInt(quantityInput.value) || 1;
        const product = {
            name: productName,
            price: parseFloat(price),
            quantity: quantity
        };

        const existingProductIndex = cart.findIndex(item => item.name === productName);
        if (existingProductIndex > -1) {
            cart[existingProductIndex].quantity += quantity;
        } else {
            cart.push(product);
        }

        alert(`${productName} ha sido añadido al carrito.`);
        updateCart();
    }

    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productItem = this.closest('.product-item');
        const productName = productItem.getAttribute('data-name');
        const price = productItem.querySelector('.price').textContent.replace('$', '');
        addToCart(productName, price);
    });
});

function addCart(name) {
    const newProduct = products.find(product => product.name === name);
    
    if (newProduct) {
        cart.push(newProduct);
        console.log(`${newProduct.name} ha sido añadido al carrito.`);
    } else {
        console.log("Producto no encontrado.");
    }

    console.log(cart);
}
function addToCart(productName, productPrice) {
    alert(`${productName} ha sido añadido al carrito a $${productPrice}`);
  }
  
  function redirectToMain() {
    window.location.href = "index2.html";
  }
  
  // Asegúrate de que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    var compraBoton = document.getElementById("compra-boton");

    // Corrige el uso de addEventListener
    compraBoton.addEventListener("click", showNoticeSuccessfulPurchase);
});