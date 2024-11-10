// Lista de productos
const products = [
    { name: "Brochas", stars: 4, price: 10.990, image: "https://merymakeup.com/wp-content/uploads/2014/06/brocha-maquillaje.jpg" },
    { name: "Rubor", stars: 5, price: 12.490, image: "https://i0.wp.com/tecnoestilos.com/wp-content/uploads/2022/10/samy-rubor-08-rosa.jpg?fit=600%2C600&ssl=1" },
    { name: "Delineador", stars: 3, price: 8.000, image: "https://lignedor.com.co/wp-content/uploads/2021/02/Delineador-Plumon.jpg" },
    { name: "Tinta de labios", stars: 4, price: 14.000, image: "https://http2.mlstatic.com/D_NQ_NP_848191-MLV50845188261_072022-O.webp" },
    { name: "Lip Gloss", stars: 5, price: 19.410, image: "https://www.anyeluz.com/cdn/shop/files/Lipgloss1.jpg?v=1717699616&width=1080" },
    { name: "Paleta de sombras", stars: 4, price: 35.000, image: "https://m.media-amazon.com/images/I/61UqnP6hHlL._SL1000_.jpg" },
    { name: "Paleta de sombras James Charles", stars: 5, price: 89.000, image: "https://artmakeuproom.com/web/image/product.template/2/image_1024?unique=ce90aae" },
    { name: "Lapiz delineador labios", stars: 5, price: 15.890, image: "https://samycosmetics.vtexassets.com/arquivos/ids/156350/054107-1.jpg?v=637757985425930000" },
    { name: "Contornos", stars: 4, price: 15.000, image: "https://samycosmetics.vtexassets.com/arquivos/ids/156370/004031-1.jpg?v=637757985505400000" },
    { name: "Pestañas punto a punto", stars: 3, price: 13.090, image: "https://kissbeautymedellin.com/wp-content/uploads/2022/08/JM504-10-e1660680137890.jpg" },
    { name: "Base", stars: 5, price: 30.000, image: "https://ettos.co/cdn/shop/files/228_20soft_20tan_1_5c054904-a7dc-4ac1-91fc-0b7a96ab3542.jpg?v=1712966155" },
    { name: "Iluminadores", stars: 3, price: 10.000, image: "https://samycosmetics.vtexassets.com/arquivos/ids/156960/149006.jpg?v=637794123077200000" }
];

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
