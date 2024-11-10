    // Filtrar productos
    window.filterProducts = function() {
        const searchTerm = document.getElementById('search').value.toLowerCase();
        const products = document.querySelectorAll('.product-item');

        products.forEach(product => {
            const productName = product.getAttribute('data-name').toLowerCase();
            product.style.display = productName.includes(searchTerm) ? '' : 'none';
        });
    }