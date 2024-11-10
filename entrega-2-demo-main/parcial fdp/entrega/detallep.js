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

// Simulación de datos de productos (puedes reemplazar esto con datos reales o desde una base de datos)
const productos = {
  1: {
      nombre: "Borlas felpa",
      descripcion: "¡Con nuestra almohadita podrás eliminar visiblemente tus imperfecciones hasta en zonas de difícil acceso con la técnica baking! Difumina perfecto tu maquillaje en polvo. Deja un acabado de piel tersa. Te aporta mayor cobertura. Es ideal para realizar la técnica de baking en tu rostro por su corte en punta. Su material es de felpa, ultra suave. Llévala a todas partes.",
      precio: "$2.000",
      imagen: "./img/borla.png"
  },
  2: {
      nombre: "Gloss mágico de oro",
      descripcion: "Este gloss aporta un brillo natural y suave a los labios, ideal para un look diario.",
      precio: "$8.000",
      imagen: "./img/gloss transparente .png"
  },
  3: {
      nombre: "Shimmer con aroma",
      descripcion: "Este shimmer corporal con aroma es perfecto para dar un toque de brillo y frescura.",
      precio: "$12.000",
      imagen: "./img/shimmers.png"
  }
};

// Función para obtener el ID del producto desde la URL
function getProductIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

// Función para cargar los detalles del producto
function loadProductDetails() {
  const productId = getProductIdFromUrl();

  // Verifica si el producto existe en los datos
  if (productos[productId]) {
      const producto = productos[productId];

      // Actualiza el contenido del detalle de producto
      document.querySelector('.imagen-producto img').src = producto.imagen;
      document.querySelector('.info-basica h1').textContent = producto.nombre;
      document.querySelector('.info-basica p').textContent = producto.descripcion;
      document.querySelector('.info-basica h2').textContent = `Precio: ${producto.precio}`;
  } else {
      alert("Producto no encontrado");
  }
}

// Llama a la función para cargar los detalles del producto al cargar la página
document.addEventListener("DOMContentLoaded", loadProductDetails);
