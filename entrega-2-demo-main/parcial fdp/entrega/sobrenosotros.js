document.addEventListener("DOMContentLoaded", function() {
    const sobreNosotrosSection = document.querySelector(".sobre-nosotros");

    // Verifica si el elemento está en el viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Función para añadir la animación
    function showSection() {
        if (isInViewport(sobreNosotrosSection)) {
            sobreNosotrosSection.classList.add("visible");
            window.removeEventListener("scroll", showSection); // Elimina el evento después de mostrar
        }
    }

    // Escucha el evento scroll para aplicar la animación
    window.addEventListener("scroll", showSection);
    showSection(); // Llama inicialmente en caso de estar ya en el viewport
});

document.getElementById("volver-btn").addEventListener("click", function() {
    window.location.href = "index2.html"; // Cambia "index.html" al nombre de tu página principal
});
