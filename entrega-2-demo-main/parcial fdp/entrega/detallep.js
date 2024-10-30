document.addEventListener('DOMContentLoaded', function() {
  // Función para redirigir a la página principal
  function redirectToMain() {
      window.location.href = "../index2.html"; // Asegúrate de que esta ruta sea correcta
  }

  // Manejo del clic en el botón "Añadir al Carrito"
  document.querySelector(".add-to-cart-btn").addEventListener("click", function() {
      alert("Producto añadido al carrito");
      // Lógica para añadir el producto al carrito
      // Aquí puedes implementar la funcionalidad para añadir el producto al carrito de compras
  });

  // Manejo del clic en el botón "Comprar Ahora"
  document.querySelector(".buy-now-btn").addEventListener("click", function() {
      alert("Redirigiendo a la compra");
      // Aquí puedes redirigir a la página de pago, por ejemplo:
      // window.location.href = "../carrito.html"; // Cambia la ruta según tu estructura
  });

  // Manejo del clic en el botón "Volver a la Página Principal"
  document.querySelector(".back-to-main-btn").addEventListener("click", redirectToMain);
});


// Redirección a la página principal
function redirectToMain() {
  window.location.href = "index2.html"; // Cambia la ruta a la correcta
}

// Confirmación al añadir al carrito
document.querySelector(".add-to-cart-btn").addEventListener("click", function() {
  alert("Producto añadido al carrito");
});

// Confirmación al realizar la compra
document.querySelector(".buy-now-btn").addEventListener("click", function() {
  alert("Redirigiendo a la compra");
});
