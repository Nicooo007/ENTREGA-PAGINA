document.addEventListener('DOMContentLoaded', function () {
    // Clases y Objetos
    class Product {
        constructor(name, price, description, size, onstock, creator, image, category) {
            this.name = name;
            this.price = price;
            this.description = description;
            this.size = size;
            this.onstock = onstock;
            this.creator = creator;
            this.image = image;
            this.category = category;
        }
    }

    // Generación de datos de ejemplo
    function generateDummyProducts() {
        const products = [];
        for (let i = 1; i <= 15; i++) {
            products.push(new Product(
                `Producto ${i}`,                   // name
                (Math.random() * 100).toFixed(2),  // price
                `Descripción del producto ${i}`,    // description
                `${Math.floor(Math.random() * 10) + 1} cm`, // size
                Math.random() > 0.5,               // onstock (true or false)
                `Creador ${i}`,                    // creator
                `https://via.placeholder.com/150?text=Producto+${i}`, // image
                'Categoría de ejemplo'             // category
            ));
        }
        return products;
    }

    const dummyProducts = generateDummyProducts();
    const productContainer = document.getElementById('contenedor-productos');

    // Visualización de los productos
    dummyProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.setAttribute('data-name', product.name);
        productDiv.setAttribute('data-description', product.description);
        
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">$${product.price}</p>
            <input type="number" name="quantity" value="1" min="1">
            <button class="add-to-cart-btn">Añadir al carrito</button>
            <button class="view-detail-btn">Ver detalles</button>
        `;

        productContainer.appendChild(productDiv);
    });
});


    // Manejo del Login
    const loginForm = document.getElementById('loginForm');
    const userBtn = document.getElementById('userBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            localStorage.setItem('userEmail', email);
            window.location.href = 'user-profile.html'; // Redirigir a la página de perfil
        });
    }

    if (userBtn) {
        const userEmail = localStorage.getItem('userEmail');
        if (userEmail) {
            userBtn.textContent = 'Perfil';
            userBtn.href = 'user-profile.html'; // Redirigir a la página de perfil
        }
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('userEmail');
            window.location.href = 'index.html'; // Redirigir a la página de inicio
        });
    }

    // --- Cargar y cambiar imagen de perfil ---
const cameraIcon = document.getElementById('camera-icon');
const uploadPhoto = document.getElementById('upload-photo');
const profilePhoto = document.getElementById('profile-photo');
let currentPhoto = null; // Variable para almacenar la foto actual

if (cameraIcon && uploadPhoto) {
  cameraIcon.addEventListener('click', () => {
    uploadPhoto.click();
  });

  uploadPhoto.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      profilePhoto.style.backgroundImage = `url(${e.target.result})`;
      profilePhoto.textContent = ''; // Quita las iniciales o texto alternativo si lo hubiera
      currentPhoto = e.target.result; // Guarda la foto actual para posibles ediciones
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  });
}

    // Carrito de compras
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

    // Filtrar productos
    window.filterProducts = function() {
        const searchTerm = document.getElementById('search').value.toLowerCase();
        const products = document.querySelectorAll('.product-item');

        products.forEach(product => {
            const productName = product.getAttribute('data-name').toLowerCase();
            product.style.display = productName.includes(searchTerm) ? '' : 'none';
        });
    }

    // Agregar función addToCart a los botones
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productItem = this.closest('.product-item');
            const productName = productItem.getAttribute('data-name');
            const price = productItem.querySelector('.price').textContent.replace('$', '');
            addToCart(productName, price);
        });
    });

    // Manejo de detalles del producto
    const addToDetailButton = document.querySelectorAll('.view-detail-btn');
    addToDetailButton.forEach(button => {
        button.addEventListener('click', function() {
            const productItem = this.closest('.product-item');
            const productName = productItem.getAttribute('data-name');
            const productDescription = productItem.getAttribute('data-description');
            const productPrice = productItem.querySelector('.price').textContent.replace('$', '');
            const productImage = productItem.querySelector('img').src;

            localStorage.setItem('productName', productName);
            localStorage.setItem('productDescription', productDescription);
            localStorage.setItem('productPrice', productPrice);
            localStorage.setItem('productImage', productImage);

            window.location.href = 'product-detail.html'; // Redirigir a la página de detalles del producto
        });
    });

    // Información del producto en la página de detalles
    const productName = localStorage.getItem('productName');
    const productDescription = localStorage.getItem('productDescription');
    const productPrice = localStorage.getItem('productPrice');
    const productImage = localStorage.getItem('productImage');

    if (productName) {
        document.getElementById('productName').textContent = productName;
        document.getElementById('productDescription').textContent = productDescription;
        document.getElementById('productPrice').textContent = `$${productPrice}`;
        document.getElementById('productImage').src = productImage;

        const addToCartBtn = document.getElementById('addToCartBtn');
        addToCartBtn.addEventListener('click', function() {
            const quantity = parseInt(document.getElementById('quantity').value) || 1;
            const product = {
                name: productName,
                price: parseFloat(productPrice),
                quantity: quantity,
                image: productImage
            };

            const existingProductIndex = cart.findIndex(item => item.name === productName);
            if (existingProductIndex > -1) {
                cart[existingProductIndex].quantity += quantity;
            } else {
                cart.push(product);
            }

            updateCart();
            alert(`${productName} ha sido añadido al carrito.`);
        });
    }





// Lista de productos relacionados (puedes usar el array de productos que ya tienes)
const relatedProducts = [
    {
        imgUrl: "./img/gloss_transparente.png", // Cambia la URL a la imagen correcta
        name: "Gloss Mágico de Oro",
        price: "$8.000"
    },
    {
        imgUrl: "./img/shimmers.png", // Cambia la URL a la imagen correcta
        name: "Shimmer con Aroma",
        price: "$12.000"
    },
    // Agrega más productos relacionados aquí...
];

// Función para mostrar productos relacionados
function displayRelatedProducts() {
    const container = document.getElementById('related-products-container');

    relatedProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'producto';
        
        productDiv.innerHTML = `
            <img src="${product.imgUrl}" alt="Producto relacionado">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>Añadir al Carrito</button>
        `;

        container.appendChild(productDiv);
    });
}







// Asegúrate de que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    var compraBoton = document.getElementById("compra-boton");

    // Corrige el uso de addEventListener
    compraBoton.addEventListener("click", showNoticeSuccessfulPurchase);
});

// Funciones de redirección
function redirectToIndex() {
    window.location.href = "../index2.html";
}

function redirectToMain() {
    window.location.href = "../Mainpage/main.html";
}

function redirectToModerns() {
    window.location.href = "../Moderns/moderns.html";
}

function redirectFantasy() {
    window.location.href = "../Fantasy/fantasy.html";
}

function redirectToNews() {
    window.location.href = "../News/news.html";
}

function redirectToOffers() {
    window.location.href = "../Offers/offers.html";
}

function redirectToTrendings() {
    window.location.href = "../Trending/trending.html";
}

function redirectToRecommendatios() {
    window.location.href = "../recommendations/recommend.html";
}

function redirectToFavorite() {
    window.location.href = "../Favoritepage/favorite.html";
}

function redirectToMyAccount() {
    window.location.href = "../Myaccountpage/account.html";
}










// Llama a la función para mostrar los productos relacionados
displayRelatedProducts();

class Product {
    constructor(name, price, description, size, onstock, creator, image, category) {
        this.name = name
        this.price = price
        this.description = description
        this.size = size
        this.onstock = onstock
        this.creator = creator
        this.image = image
        this.category = category

    }
    
prodCard(pos) {
    return `<div class="prod-card">
                    <img src="${this.image}" class="imagenes" onclick="openProduct(${pos})"> 
                    <div class="prod-info">
                        <h2 onclick="openProduct(${pos})">${this.name}</h2>
                        <div id="row-info">
                            <p>$ ${this.price}</p>
                            <img src="./pics/heart-regular.svg" class="heart" data-pos="${pos}">
                        </div>
                    </div>
                </div> `
}
}



import { addCart } from './product.html';

let products = []
function parseDataToProducts() {
    for(let i = 0; i < data.length; i++) {
        let map = data[i]
        let product = new Product(map["name"], map["price"], map["description"], map["size"], map["onstock"], map["creator"], map["image"])
        products.push(product)
    }
}


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
    window.location.href = "index.html";
  }
  