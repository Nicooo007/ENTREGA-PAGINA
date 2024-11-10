// Función para cargar los detalles del producto desde sessionStorage
function loadProductDetails() {
    const productData = sessionStorage.getItem('selectedProduct');
    const product = productData ? JSON.parse(productData) : null;

    if (product) {
        // Mostrar la información del producto en los elementos correspondientes
        document.getElementById("product-name").innerText = product.name;
        document.getElementById("product-price").innerText = "Precio: $" + product.price;
        document.getElementById("product-stars").innerText = "Estrellas: " + "★".repeat(product.stars) + "☆".repeat(5 - product.stars);
        document.getElementById("product-image").src = product.image;
    } else {
        document.getElementById("product-details-page").innerText = "Producto no encontrado.";
    }
}

// Ejecutar la función de carga de detalles al cargar la página
window.onload = loadProductDetails;
