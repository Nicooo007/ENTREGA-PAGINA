// Contenedor de productos
const productContainer = document.getElementById("product-container");

// Función para generar estrellas como HTML
function generateStars(rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        starsHTML += (i <= rating)
            ? '<span style="color: gold;">★</span>'  // Estrella rellena
            : '<span style="color: lightgray;">★</span>';  // Estrella vacía
    }
    return starsHTML;
}

// Renderizar los productos en el contenedor
function renderProducts() {
    products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" />
            <div class="product-name">${product.name}</div>
            <div class="product-stars">${generateStars(product.stars)}</div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <button class="button" onclick="addToCart('${product.name}', ${product.price})">Añadir al carrito</button>
            <button class="button" onclick="viewDetails('${product.name}')">Ver detalles</button>
        `;
        
        productContainer.appendChild(productCard);
    });
}

// Función para manejar el clic en "Añadir al carrito"
function addToCart(productName, productPrice) {
    alert(`Producto: ${productName} agregado al carrito. Precio: $${productPrice.toFixed(2)}`);
}

// Función para mostrar los detalles del producto
function viewDetails(productName) {
    // Buscar el producto en la lista de productos
    const product = products.find(p => p.name === productName);

    if (product) {
        // Rellenar los datos del modal con los detalles del producto
        document.getElementById("detail-title").innerText = product.name;
        document.getElementById("detail-price").innerText = `Precio: $${product.price.toFixed(2)}`;
        document.getElementById("detail-manufacturer").innerText = "Fabricante: Desconocido"; // Si tienes el dato, reemplaza
        document.getElementById("detail-ordercode").innerText = "Código de Producto: 0000"; // Si tienes un código de producto, reemplaza
        document.getElementById("detail-reviews").innerHTML = `Reseñas: ${generateStars(product.stars)}`;
        
        // Mostrar la imagen del producto en el modal
        const detailImages = document.getElementById("detail-images");
        detailImages.innerHTML = `<img src="${product.image}" alt="${product.name}" class="product-detail-image" />`;

        // Mostrar el modal
        document.getElementById("product-details").style.display = "block";
    }
}

// Función para cerrar el modal de detalles
function closeProductDetails() {
    document.getElementById("product-details").style.display = "none";
}

// Ejecutar la función para renderizar los productos al cargar la página
window.onload = renderProducts;
